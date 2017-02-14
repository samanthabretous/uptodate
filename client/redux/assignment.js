import axios from 'axios';

// -------------------
// types
// -------------------

// -------------------
// actions
// -------------------


export const AsyncPostAssignment = data => () => {
  axios.post('/api/assignments', data);
};

// -------------------
// reducer
// -------------------
const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
