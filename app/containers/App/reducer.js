import { fromJS } from 'immutable';

import { DRAWER_TOGGLE } from './constants';

const initialState = fromJS({
  drawerToggle: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case DRAWER_TOGGLE:
      return state
        .set('drawerToggle', action.drawerToggle);
    default:
      return state;
  }
}

export default appReducer;
