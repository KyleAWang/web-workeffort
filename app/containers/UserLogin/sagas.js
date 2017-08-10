import { put, takeLatest, cancel, take, select, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { browserHistory } from 'react-router';

import {
  makeSelectUserName,
  makeSelectPassord
} from './selectors';
import {
  userLoginSuccess,
  userLoginError
} from './actions';
import {
  USER_LOGIN
} from './constants';

export function* userLogin() {
  const requestURL = '/api/signin/';
  const userName = yield select(makeSelectUserName());
  const password = yield select(makeSelectPassord());

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: userName, password: password})
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(userLoginSuccess(response));
  } catch (err) {
    console.log(err);
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
]