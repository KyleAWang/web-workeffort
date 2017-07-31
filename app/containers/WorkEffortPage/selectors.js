import { createSelector } from 'reselect';

const selectWorkEffort = (state) => state.get('workEffort');

const makeSelectSearchOptions = () => createSelector(
  selectWorkEffort,
  (workEffortState) => workEffortState.get('searchOptions')
);

export {
  selectWorkEffort,
  makeSelectSearchOptions
};