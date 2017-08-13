import React from 'react';
import { browserHistory } from 'react-router';


export function login(jwtToken) {
  sessionStorage.jwtToken = jwtToken;
}

export function loggedIn() {
  if (!sessionStorage.jwtToken) {
    browserHistory.push('/login');
  } else {
    return !!sessionStorage.jwtToken;
  }
}

export function logout() {
  delete sessionStorage.jwtToken;
  browserHistory.push('/login');
}