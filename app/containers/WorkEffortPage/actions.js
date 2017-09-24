import {
  CHANGE_SEARCH_OPTIONS,
  SEARCH_WORKEFFORTS,
  SEARCH_WORKEFFORTS_SUCCESS,
  SEARCH_WORKEFFORTS_ERROR,
  DIAGRAM_DIALOG_TOGGLE,
} from './constants';

export function changeSearchOptions(searchOptions) {
  return {
    type: CHANGE_SEARCH_OPTIONS,
    searchOptions,
  };
}

export function searchWorkEfforts() {
  return {
    type: SEARCH_WORKEFFORTS,
  };
}

export function searchWorkEffortsSuccess(workEfforts) {
  return {
    type: SEARCH_WORKEFFORTS_SUCCESS,
    workEfforts,
  };
}

export function searchWorkEffortsError(error) {
  return {
    type: SEARCH_WORKEFFORTS_ERROR,
    error,
  };
}

export function toggleDiagramDialog(diagramDialogOpen) {
  return {
    type: DIAGRAM_DIALOG_TOGGLE,
    diagramDialogOpen,
  };
}
