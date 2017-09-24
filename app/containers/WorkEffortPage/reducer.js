import { fromJS } from 'immutable';

import {
  SEARCH_WORKEFFORTS,
  SEARCH_WORKEFFORTS_SUCCESS,
  SEARCH_WORKEFFORTS_ERROR,
  CHANGE_SEARCH_OPTIONS,
  DIAGRAM_DIALOG_TOGGLE,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  workEfforts: false,
  searchOptions: {},
  diagramDialogOpen: false,
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
    case SEARCH_WORKEFFORTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('workEfforts', action.workEfforts);
    case SEARCH_WORKEFFORTS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case DIAGRAM_DIALOG_TOGGLE:
      return state
        .set('diagramDialogOpen', action.diagramDialogOpen);
    default:
      return state;
  }
}

export default workEffortReducer;
