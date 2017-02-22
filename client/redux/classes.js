import axios from 'axios';
import createStore from './createStore';
// -------------------
// types
// -------------------
const GET_CLASSES = 'get_classes';

// -------------------
// actions
// -------------------
const getClasses = classes => ({
  type: GET_CLASSES,
  classes,
});

export const AsyncGetClasses = userId => (dispatch) => {
  axios.get(`/api/classes/allClasses/${userId}`)
  .then((classes) => {
    dispatch(getClasses(classes.data));
  });
};

export const getAllClassNames = (nextState) => {
  const { userId } = nextState.params;
  return createStore.dispatch(AsyncGetClasses(userId));
};

// -------------------
// reducer
// -------------------
const initialState = {
  classes: null,
  firstName: '',
  currentClass: {
    enrollmentCode: '',
    lessons: null,
    name: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSES:
      return Object.assign({}, state, {
        classes: action.classes.classes,
        firstName: action.classes.firstName,
        currentClass: action.classes.currentClass,
      });
    default:
      return state;
  }
};
