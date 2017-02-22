import axios from 'axios';
import _ from 'lodash';

// -------------------
// types
// -------------------
const GET_LESSON_VOTES = 'get_lesson_votes';

// -------------------
// actions
// -------------------

export const allVotes = lessonVotes => ({
  type: GET_LESSON_VOTES,
  lessonVotes,
});

// thunk action
// getState can also be pass thru as an argument after dispatch
export const getVotesAsync = (lessonId, userId) => (dispatch) => {
  axios.get(`/api/votes/lesson/${lessonId}/${userId}`)
  .then((votes) => {
    dispatch(allVotes(votes.data));
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
