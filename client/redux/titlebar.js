import axios from 'axios';
import createStore from './createStore';

// -------------------
// types
// -------------------
export const TITLEBAR_INFO = 'titlebar_info';

// -------------------
// actions
// -------------------

export const getTitlebar = titlebar => (
  {
    type: TITLEBAR_INFO,
    titlebar,
  }
);

// thunk action
// getState can also be pass thru as an argument after dispatch
export const getTitlebarInfoAsync = userId => dispatch => (
  axios.get(`/api/users/${userId}/lastclass`)
  .then((titlebarInfo) => {
    dispatch(getTitlebar(titlebarInfo.data));
  })
  .catch(err => err)
);

export const getTitlebarInfo = nextState => (
  createStore().dispatch(getTitlebarInfoAsync(nextState.params.user))
);

// -------------------
// reducer
// -------------------
export const initialState = {

};

export default (state = initialState, action) => {
  switch (action.type) {
    case TITLEBAR_INFO:
      return state;
    default:
      return state;
  }
};
