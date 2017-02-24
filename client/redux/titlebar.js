import axios from 'axios';
import _ from 'lodash';
import createStore from './createStore';

// -------------------
// types
// -------------------
export const TITLEBAR_INFO = 'titlebar_info';
export const SHOW_TITLE_CLASSES = 'show_title_classes';
// -------------------
// actions
// -------------------

export const isShowAllClassesAction = isShowAllClasses => ({
  type: SHOW_TITLE_CLASSES,
  isShowAllClasses,
});

export const getTitlebar = (titlebar) => {
  const { id, email, firstName, lastName, position, username, classes, currentClass } = titlebar;
  const { users } = currentClass;
  // sort users if they are a teacher or a student
  // add them to the current class
  const instructors = _.filter(users, ['position', 'Instructor']);
  const students = _.filter(users, ['position', 'Student']);
  currentClass.instructors = instructors;
  currentClass.students = students;

  return {
    type: TITLEBAR_INFO,
    userInfo: {
      id,
      email,
      firstName,
      lastName,
      position,
      username,
    },
    classes,
    currentClass,
  };
};

// thunk action
// getState can also be pass thru as an argument after dispatch
export const getTitlebarInfoAsync = (currentClassCode, userId) => dispatch => (
  axios.get(`/api/classes/titlebar/${currentClassCode}/${userId}`)
  .then((titlebarInfo) => {
    dispatch(getTitlebar(titlebarInfo.data));
  })
  .catch(err => err)
);

// thunk action
// getState can also be pass thru as an argument after dispatch
export const updateTitlebarInfoAsync = (currentClassCode, userId) => dispatch => (
  axios.put(`/api/classes/titlebar/${currentClassCode}/${userId}`)
  .then((titlebarInfo) => {
    dispatch(getTitlebar(titlebarInfo.data));
  })
  .catch(err => err)
);

export const getTitlebarInfo = (nextState) => {
  const { currentClassCode, user } = nextState.params;
  return createStore.dispatch(getTitlebarInfoAsync(currentClassCode, user));
};

// -------------------
// reducer
// -------------------
export const initialState = {
  userInfo: {},
  currentClass: null,
  classes: null,
  isShowAllClasses: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TITLEBAR_INFO:
      return _.assign({}, state, {
        userInfo: action.userInfo,
        classes: action.classes,
        currentClass: action.currentClass,
        isShowAllClasses: false,
      });
    case SHOW_TITLE_CLASSES:
      return _.assign({}, state, {
        isShowAllClasses: action.isShowAllClasses,
      });
    default:
      return state;
  }
};
