import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homeReducer;
