import React from 'react';


export class Auth{
  login(user) {
    localStorage.user = user;
  }

  loggedIn() {
    return !!localStorage.user && localStorage.user.hasLoggedOut === 'N';
  }

  logout() {
    delete localStorage.user;
  }
}