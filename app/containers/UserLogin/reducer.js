import {fromJS} from 'immutable';

import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_PASSWORD_CHANGE,
  USER_LOGIN_USERNAME_CHANGE
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  userName: false,
  password: false
});

function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return state
        .set('loading', true)
        .set('error', false);
    case USER_LOGIN_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case USER_LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false);
    case USER_LOGIN_USERNAME_CHANGE:
      return state
        .set('userName', action.userName);
    case USER_LOGIN_PASSWORD_CHANGE:
      return state
        .set('password', action.password);
    default:
      return state;
  }
}

export default userLoginReducer;
