import { createSelector } from 'reselect';

const selectWorkEffort = (state) => state.get('workEffort');

const makeSelectSearchOptions = () => createSelector(
  selectWorkEffort,
  (workEffortState) => workEffortState.get('searchOptions')
);

const makeSelectSearchWorkEfforts = () => createSelector(
  selectWorkEffort,
  (workEffortState) => workEffortState.get('workEfforts')
);

const makeSelectLoading = () => createSelector(
  selectWorkEffort,
  (workEffortState) => workEffortState.get('loading')
);

const makeSelectError = () => createSelector(
  selectWorkEffort,
  (workEffortState) => workEffortState.get('error')
);

export {
  selectWorkEffort,
  makeSelectSearchOptions,
  makeSelectSearchWorkEfforts,
  makeSelectError,
  makeSelectLoading
};