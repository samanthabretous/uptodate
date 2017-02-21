import axios from 'axios';
import createStore from './createStore';


// -------------------
// types
// -------------------
const FETCH_STUDENT_INFO = 'fetch_student_info';

// -------------------
// actions
// -------------------

export const getStudentInfo = userInfo => ({
  type: FETCH_STUDENT_INFO,
  userInfo,
});

// thunk action
// getState can also be passed through as an argument after dispatch
export const getStudentInfoAsync = (userId, classCode) => (dispatch) => {
  axios.get(`/api/users/student/${userId}/${classCode}`)
  .then(({ data }) => {
    const userData = {
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      currentClass: data.classes[0],
      recentDiscussions: data.discussions,
      submittedWork: data.works,
      classAssignments: data.classes[0].assignments,
    };
    dispatch(getStudentInfo(userData));
  })
  .catch(err => err);
};

export const enterGetStudentInfo = ({ params: { user, currentClassCode } }) => (
  createStore.dispatch(getStudentInfoAsync(user, currentClassCode))
);


// -------------------
// reducer
// -------------------
export const initialState = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  classAssignments: [],
  submittedWork: [],
  recentDiscussions: [],
  currentClass: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT_INFO:
      return { ...state, ...action.userInfo };
    default:
      return state;
  }
};
