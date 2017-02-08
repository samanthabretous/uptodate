// -------------------
// types
// -------------------
export const SIGN_UP_INFO = 'sign_up_info';
export const ADD_SIGN_UP_INFO = 'add_sign_up_info';
export const ADD_USER = 'add_user';

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
    default:
      return state;
  }
};
