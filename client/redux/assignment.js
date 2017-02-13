import axios from 'axios';

// -------------------
// types
// -------------------
const GET_LESSONS = 'GET_LESSONS';

// -------------------
// actions
// -------------------
const getLessons = data => ({
  type: GET_LESSONS,
  data,
});

export const AsyncGetLessons = classId => (dispatch) => {
  axios.get(`/api/lessons/byClass/${classId}`)
  .then((lessons) => {
    dispatch(getLessons(lessons.data));
  });
};

// -------------------
// reducer
// -------------------
const initialState = {
  classLessons: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LESSONS:
      return Object.assign({}, state, { classLessons: action.data });
    default:
      return state;
  }
};
