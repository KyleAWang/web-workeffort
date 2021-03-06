import { put, takeLatest, cancel, take, select, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';

import request from 'utils/request';
import { logout } from 'utils/auth';
import { makeSelectSearchOptions } from './selectors';
import { searchWorkEffortsSuccess, searchWorkEffortsError } from './actions';
import { SEARCH_WORKEFFORTS } from './constants';

export function* searchWorkefforts() {
  const requestURL = '/api/workefforts/';
  const searchOptions = yield select(makeSelectSearchOptions());

  let jwtToken;
  console.log(window.sessionStorage.getItem('jwtToken'));

  if (window.sessionStorage.getItem('jwtToken')) {
    jwtToken = window.sessionStorage.getItem('jwtToken');
  } else {
    browserHistory.push('/login');
  }

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': jwtToken,
    },
    body: JSON.stringify(searchOptions),
  };

  try {
    const response = yield call(request, requestURL, options);
    console.log(response);

    yield put(searchWorkEffortsSuccess(response.workEfforts));
  } catch (err) {
    if (err.response.status === 403) {
      logout();
    } else {
      yield put(searchWorkEffortsError(err));
    }
  }
}

export function* searchWorkeffortsData() {
  const watcher = yield takeLatest(SEARCH_WORKEFFORTS, searchWorkefforts);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  searchWorkeffortsData,
];
