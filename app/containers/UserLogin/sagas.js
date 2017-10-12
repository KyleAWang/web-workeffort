import { put, takeLatest, cancel, take, select, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { browserHistory } from 'react-router';

import {
  makeSelectUserName,
  makeSelectPassord,
} from './selectors';
import {
  userLoginSuccess,
  userLoginError,
} from './actions';
import {
  USER_LOGIN,
} from './constants';

export function* userLogin() {
  const requestURL = '/signin/';
  const userName = yield select(makeSelectUserName());
  const password = yield select(makeSelectPassord());

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: userName, password }),
  };

  try {
    const response = yield call(request, requestURL, options);
    if (response.jwtToken) {
      window.sessionStorage.setItem('jwtToken', response.jwtToken);
    }
    yield put(userLoginSuccess(response));
    browserHistory.push('/');
  } catch (err) {
    yield put(userLoginError(err));
  }
}

export function* userLoginData() {
  const watcher = yield takeLatest(USER_LOGIN, userLogin);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  userLoginData,
];
