import { fromJS } from 'immutable';

import {
  SEARCH_WORKEFFORTS,
  SEARCH_WORKEFFORTS_SUCCESS,
  SEARCH_WORKEFFORTS_ERROR,
  CHANGE_SEARCH_OPTIONS
} from './constants'

const initialState = fromJS({
  loading: false,
  error: false,
  workEfforts: false,
  searchOptions: {}
});

function workEffortReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_WORKEFFORTS:
      return state
        .set('loading', true)
        .set('error', false);
    case CHANGE_SEARCH_OPTIONS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('searchOptions', action.searchOptions);
    default:
      return state;
  }
}

export default workEffortReducer;