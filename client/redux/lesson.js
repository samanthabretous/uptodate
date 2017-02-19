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

export const selectedLessonAction = (lessonId, lessonname) => ({
  type: SELECTED_LESSON,
  lessonId,
  lessonname,
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
  axios.post('/api/lessons/new_lesson', data)
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
  console.log('className', className)
  console.log('lessonName', lessonName)
  axios.get('/api/repoFile/getFile', {
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
      return Object.assign({}, state, {
        classLessons: action.data,
      });
    case SELECTED_LESSON:
      return Object.assign({}, state, {
        lessonId: action.lessonId,
        lessonname: action.lessonname,
      });
    case DROPPED_FOLDER:
      return Object.assign({}, state, { folderPath: action.folderPath });
    case GET_CODE:
      return Object.assign({}, state, { instructorCode: action.code });
    default:
      return state;
  }
};
