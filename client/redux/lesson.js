import axios from 'axios';
import createStore from './createStore';

// -------------------
// types
// -------------------
const GET_LESSONS = 'GET_LESSONS';
export const DROPPED_FOLDER = 'dropped_folder';


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

export const enterGetLessons = () => {
  const state = createStore.getState();
  return createStore.dispatch(AsyncGetLessons(state.titlebar.id));
};

export const droppedFolderAction = folderPath => ({
  type: DROPPED_FOLDER,
  folderPath,
});

// -------------------
// reducer
// -------------------

const initialState = {
  folderPath: null,
  classLessons: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LESSONS:
      return Object.assign({}, state, { classLessons: action.data });
    case DROPPED_FOLDER:
      return Object.assign({}, state, { folderPath: action.folderPath });
    default:
      return state;
  }
};
