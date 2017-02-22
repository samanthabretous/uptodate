import axios from 'axios';

// -------------------
// types
// -------------------
const GET_DISCUSSION = 'get_discussion';
const ADD_MESSAGE = 'add_message';

// -------------------
// actions
// -------------------

export const getDiscussionAction = chatMessages => ({
  type: GET_DISCUSSION,
  chatMessages,
});

export const AsyncGetDiscussion = lessonId => (dispatch) => {
  axios.get(`http://localhost:2020/api/discussion/lesson/${lessonId}`)
  .then((discussion) => {
    dispatch(getDiscussionAction(discussion.data));
  });
};

export const addMessageAction = message => ({
  type: ADD_MESSAGE,
  message,
});


// -------------------
// reducer
// -------------------

const initialState = {
  chatMessages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DISCUSSION:
      return Object.assign({}, state, { chatMessages: action.chatMessages });
    case ADD_MESSAGE:
      return Object.assign({}, state, { chatMessages: [...state.chatMessages, action.message] });
    default:
      return state;
  }
};
