import axios from 'axios';
import _ from 'lodash';

// -------------------
// types
// -------------------
const GET_LESSON_VOTES = 'get_lesson_votes';

// -------------------
// actions
// -------------------

const getVotes = (lessonVotes) => ({
  type: GET_LESSON_VOTES,
  lessonVotes,
});

// thunk action
// getState can also be pass thru as an argument after dispatch
export const getVotesAsync = lessonId => (dispatch) => {
  axios.get(`/api/votes/lesson/${lessonId}`)
  .then((allVotes) => {
    dispatch(getVotes(allVotes.data));
  })
  .catch(err => err);
};


// -------------------
// reducer
// -------------------
export const initialState = {
  lessonVotes: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LESSON_VOTES:
      return _.assign({}, state, { lessonVotes: action.lessonVotes });
    default:
      return state;
  }
};
