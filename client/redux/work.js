import axios from 'axios';
import createStore from './createStore';

// -------------------
// types
// -------------------

const GET_WORK = 'GET_WORK';

// -------------------
// actions
// -------------------

const getWork = data => ({
  type: GET_WORK,
  data,
});

export const AsyncGetwork = assignmentId => (dispatch) => {
  axios.get(`http://localhost:2020/api/work/byAssignmentId/${assignmentId}`)
  .then((work) => {
    dispatch(getWork(work.data));
  });
};

export const AsyncPostWork = data => () => {
  axios.post('/api/work', data);
};

export const enterGetWork = (nextState) => {
  const assignmentId = nextState.params.assignmentId;
  return createStore.dispatch(AsyncGetwork(assignmentId));
};

// -------------------
// reducer
// -------------------
export const initialState = {
  work:  null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WORK:
      return Object.assign({}, state, { work: action.data });
    default:
      return state;
  }
};
