import { CHANGE_SEARCH_OPTIONS } from './constants';

export function changeSearchOptions(searchOptions) {
  return {
    type: CHANGE_SEARCH_OPTIONS,
    searchOptions
  };
}