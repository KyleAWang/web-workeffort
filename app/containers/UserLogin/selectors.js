import { createSelector } from 'reselect';

const selectUser = (state) => state.get('user');

const makeSelectLoading = () => createSelector(
  selectUser,
  (userState) => userState.get('loading')
);

const makeSelectError = () => createSelector(
  selectUser,
  (userState) => userState.get('error')
);

const makeSelectUser = () => createSelector(
  selectUser,
  (userState) => userState.get('user')
);

const makeSelectUserName = () => createSelector(
  selectUser,
  (userState) => userState.get('userName')
);

const makeSelectPassord = () => createSelector(
  selectUser,
  (userState) => userState.get('password')
);

const makeSelectFormErrors = () => createSelector(
  selectUser,
  (userState) => userState.get('formErrors')
);

export {
  selectUser,
  makeSelectError,
  makeSelectLoading,
  makeSelectUser,
  makeSelectUserName,
  makeSelectPassord,
  makeSelectFormErrors,
};
