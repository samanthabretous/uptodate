import axios from 'axios';
import createStore from './createStore';

// -------------------
// types
// -------------------
const GET_LESSONS = 'get_lessons';
const CREATE_LESSON = 'create_lesson';
const FETCH_LESSONS = 'fetch_lessons';
const DROPPED_FOLDER = 'dropped_folder';
const SELECTED_LESSON = 'selected_lesson';
const GET_CODE = 'get_code';
const SHOW_MAKE_LESSON = 'show_make_lesson';


// -------------------
// actions
// -------------------
const getInstructorCode = code => ({
  type: GET_CODE,
  code,
});

const postLesson = data => ({
  type: CREATE_LESSON,
  data,
});

const getLessons = data => ({
  type: GET_LESSONS,
  data,
});

const fetchLessons = data => ({
  type: FETCH_LESSONS,
  data,
});

export const droppedFolderAction = folderPath => ({
  type: DROPPED_FOLDER,
  folderPath,
});

export const selectedLessonAction = lessonInfo => ({
  type: SELECTED_LESSON,
  lessonInfo,
});

export const isMakeLessonVisibleAction = isMakeLessonVisible => ({
  type: SHOW_MAKE_LESSON,
  isMakeLessonVisible,
});

export const AsyncGetLessons = (classId, platform) => (dispatch) => {
  axios.get(`http://localhost:2020/api/lessons/byClass/${platform}/${classId}`)
  .then((lessons) => {
    dispatch(getLessons(lessons.data));
  });
};

export const enterGetLessons = (nextState) => {
  const classId = nextState.params.classId;
  return createStore.dispatch(AsyncGetLessons(classId, 'web'));
};

export const AsyncPostLesson = data => (dispatch) => {
  axios.post('http://localhost:2020/api/lessons/new_lesson', data)
  .then((lesson) => {
    dispatch(postLesson(lesson.data));
  });
};

export const AsyncFetchLessons = (classCode, platform) => (dispatch) => {
  axios.get(`http://localhost:2020/api/lessons/byClassCode/${platform}/${classCode}`)
    .then((lessons) => {
      dispatch(fetchLessons(lessons.data));
    });
};

export const enterFetchLessons = ({ params }) => createStore.dispatch(AsyncFetchLessons(params.currentClassCode, 'web'));

export const AsyncGetInstructorCode = (subPath, className, lessonName) => (dispatch) => {
  axios.get('http://localhost:2020/api/repoFile/getFile', {
    params: {
      subPath,
      className,
      lessonName,
    },
  })
 .then((code) => {
   dispatch(getInstructorCode(code.data));
 });
};

// -------------------
// reducer
// -------------------

const initialState = {
  folderPath: null,
  classLessons: null,
  classname: '',
  classCode: '',
  lessonname: '',
  lessonId: null,
  instructorCode: '// Code',
  isMakeLessonVisible: false,
  isfileWatchedBefore: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LESSONS:
      return Object.assign({}, state, {
        classLessons: action.data.lessons,
        classname: action.data.name,
        lessonLecture: action.data.lecture,
        classCode: action.data.enrollmentCode,
      });
    case GET_LESSONS:
      return Object.assign({}, state, {
        classLessons: action.data,
        classname: action.data[0].class.name,
        classCode: action.data[0].class.enrollmentCode,
      });
    case CREATE_LESSON:
      const appState = createStore.getState();
      const classLessons = state.classLessons
        ? state.classLessons.concat(action.data)
        : appState.classes.currentClass.lessons.concat(action.data);
      return Object.assign({}, state, {
        classLessons,
        lessonname: action.data.name,
        lessonId: action.data.id,
        isMakeLessonVisible: false,
      });
    case SELECTED_LESSON:
      return Object.assign({}, state, {
        lessonId: action.lessonInfo.lessonId,
        lessonname: action.lessonInfo.lessonname,
        folderPath: action.lessonInfo.folderPath,
        isfileWatchedBefore: action.lessonInfo.isfileWatchedBefore,
      });
    case DROPPED_FOLDER:
      return Object.assign({}, state, { folderPath: action.folderPath });
    case GET_CODE:
      return Object.assign({}, state, { instructorCode: action.code });
    case SHOW_MAKE_LESSON:
      return Object.assign({}, state, { isMakeLessonVisible: action.isMakeLessonVisible });
    default:
      return state;
  }
};
