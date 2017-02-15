import axios from 'axios';
import createStore from './createStore';

// -------------------
// types
// -------------------
const GET_LESSONS = 'get_lessons';
const DROPPED_FOLDER = 'dropped_folder';
const SELECTED_LESSON = 'selected_lesson';


// -------------------
// actions
// -------------------
const getLessons = data => ({
  type: GET_LESSONS,
  data,
});

export const droppedFolderAction = folderPath => ({
  type: DROPPED_FOLDER,
  folderPath,
});

export const selectedLessonAction = lessonId => ({
  type: SELECTED_LESSON,
  lessonId,
});

export const AsyncGetLessons = (classId, platform) => (dispatch) => {
  axios.get(`http://localhost:2020/api/lessons/byClass/${platform}/${classId}`)
  .then((lessons) => {
    dispatch(getLessons(lessons.data));
  });
};

export const enterGetLessons = () => {
  const state = createStore.getState();
  return createStore.dispatch(AsyncGetLessons(state.titlebar.id, 'web'));
};


// -------------------
// reducer
// -------------------

const initialState = {
  folderPath: null,
  classLessons: null,
  classname: '',
  lessonId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LESSONS:
      const classname = action.data[0].class.name || '';
      return Object.assign({}, state, { classLessons: action.data, classname });
    case SELECTED_LESSON:
      return Object.assign({}, state, { lessonId: action.lessonId });
    case DROPPED_FOLDER:
      return Object.assign({}, state, { folderPath: action.folderPath });
    default:
      return state;
  }
};
