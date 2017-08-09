import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_USERNAME_CHANGE,
  USER_LOGIN_PASSWORD_CHANGE
} from './constants';


export function userLogin() {
  return {
    type: USER_LOGIN
  }
}

export function userLoginSuccess(user) {
  return {
    type: USER_LOGIN_SUCCESS,
    user
  }
}

export function userLoginError(error) {
  return {
    type: USER_LOGIN_ERROR,
    error
  }
}

export function changeUserName(userName) {
  return {
    type: USER_LOGIN_USERNAME_CHANGE,
    userName
  }
}

export function changePassword(password) {
   return {
     type: USER_LOGIN_PASSWORD_CHANGE,
     password
   }
}