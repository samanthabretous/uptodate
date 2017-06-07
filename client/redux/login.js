// -------------------
// types
// -------------------
export const SIGN_UP_INFO = 'sign_up_info';
export const ADD_SIGN_UP_INFO = 'add_sign_up_info';
export const ADD_USER = 'add_user';
export const HANDLE_LOGIN_MODAL = 'handle_login_modal';
export const HANDLE_STUDENT_TEACHER_MODAL = 'handle_student_teacher_modal';

// -------------------
// actions
// -------------------
export const signUpInfoAction = (username, email, password) => ({
  type: SIGN_UP_INFO,
  username,
  email,
  password,
});

export const addSignUpInfoAction = (firstName, lastName, position) => ({
  type: ADD_SIGN_UP_INFO,
  firstName,
  lastName,
  position,
});

export const userInfoAction = user => ({
  type: ADD_USER,
  username: user.username,
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
  position: user.position,
});

export const loginModalAction = bool => ({
  type: HANDLE_LOGIN_MODAL,
  openLoginModal: bool,
});

export const studentTeacherModalAction = bool => ({
  type: HANDLE_STUDENT_TEACHER_MODAL,
  openStudentTeacherModal: bool,
});

// -------------------
// reducer
// -------------------
const initialState = {
  username: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  position: '',
  openLoginModal: false,
  openStudentTeacherModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_INFO:
      return Object.assign({}, state, {
        username: action.username,
        email: action.email,
        password: action.password,
      });
    case ADD_SIGN_UP_INFO:
      return Object.assign({}, state, {
        firstName: action.firstName,
        lastName: action.lastName,
        position: action.position,
      });
    case ADD_USER:
      return Object.assign({}, state, {
        username: action.username,
        email: action.email,
        firstName: action.firstName,
        lastName: action.lastName,
        position: action.position,
      });
    case HANDLE_LOGIN_MODAL:
      return Object.assign({}, state, {
        openLoginModal: action.openLoginModal,
      });
    case HANDLE_STUDENT_TEACHER_MODAL:
      return Object.assign({}, state, {
        openStudentTeacherModal: action.openStudentTeacherModal,
      });
    default:
      return state;
  }
};
