import axios from 'axios';
import _ from 'lodash';
import createStore from './createStore';

// -------------------
// types
// -------------------
export const TITLEBAR_INFO = 'titlebar_info';

// -------------------
// actions
// -------------------

export const getTitlebar = (titlebar) => {
  const { id, email, firstName, lastName, position, username, classes, currentClass } = titlebar;
  const { name, enrollmentCode, users } = currentClass;

  // count the amount of each type of user
  const userTypes = _.countBy(_.map(users, 'position'));
  const numberOfInstructorsInCurrentClass = userTypes.Instructor || 0;
  const numberOfStudentsInCurrentClass = userTypes.Student || 0;

  return {
    type: TITLEBAR_INFO,
    userInfo: {
      id,
      email,
      firstName,
      lastName,
      position,
      username,
      totalClasses: classes.length,
    },
    id: titlebar.currentClass.id,
    name,
    enrollmentCode,
    numberOfInstructorsInCurrentClass,
    numberOfStudentsInCurrentClass,
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

export const getTitlebarInfo = (nextState) => {
  const { currentClassCode, user } = nextState.params;
  return createStore.dispatch(getTitlebarInfoAsync(currentClassCode, user));
};

// -------------------
// reducer
// -------------------
export const initialState = {
  userInfo: {
    id: null,
    email: '',
    firstName: '',
    lastName: '',
    position: '',
    username: '',
    totalClasses: null,
  },
  id: null,
  name: '',
  enrollmentCode: '',
  numberOfInstructorsInCurrentClass: 0,
  numberOfStudentsInCurrentClass: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TITLEBAR_INFO:
      return _.assign({}, state, {
        userInfo: action.userInfo,
        id: action.id,
        name: action.name,
        enrollmentCode: action.enrollmentCode,
        description: action.description,
        location: action.location,
        schedule: action.schedule,
        numberOfInstructorsInCurrentClass: action.numberOfInstructorsInCurrentClass,
        numberOfStudentsInCurrentClass: action.numberOfStudentsInCurrentClass,
      });
    default:
      return state;
  }
};
