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
  }
);

// thunk action
export const getTitlebarInfoAsync = userId => (dispatch, getState) => (
  axios.get(`/api/users/${userId}/lastclass`)
  .then((titlebarInfo) => {
    dispatch(getTitlebar(titlebarInfo.data));
  })
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
    default:
      return state;
  }
};
