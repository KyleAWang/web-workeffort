import { fromJS } from 'immutable';

import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_PASSWORD_CHANGE,
  USER_LOGIN_USERNAME_CHANGE,
  USER_LOGIN_FORM_ERRORS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  userName: false,
  password: false,
  formErrors: false,
  user: false,
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
        .set('error', false)
        .set('user', action.user);
    case USER_LOGIN_USERNAME_CHANGE:
      return state
        .set('userName', action.userName)
        .set('loading', false)
        .set('error', false);
    case USER_LOGIN_PASSWORD_CHANGE:
      return state
        .set('password', action.password)
        .set('loading', false)
        .set('error', false);
    case USER_LOGIN_FORM_ERRORS:
      return state
        .set('formErrors', action.formErrors)
        .set('loading', false)
        .set('error', false);
    default:
      return state;
  }
}

export default userLoginReducer;
