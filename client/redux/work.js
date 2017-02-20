import axios from 'axios';

// -------------------
// types
// -------------------

// -------------------
// actions
// -------------------

export const AsyncPostWork = data => () => {
  console.log(data);
  axios.post('/api/work', data);
};

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
