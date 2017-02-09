import fetch from 'isomorphic-fetch';
import axios from 'axios'
export const FETCH_TODOS_REQUEST = 'a';
export const FETCH_TODOS_SUCCESS = 'b';
export const FETCH_TODOS_FAILURE = 'c';
export function fetchTodosRequest() {
  return {
    type: FETCH_TODOS_REQUEST
  }
}

export function fetchTodosSuccess(body) {
  return {
    type: FETCH_TODOS_SUCCESS,
    body
  }
}

export function fetchTodosFailure(ex) {
  return {
    type: FETCH_TODOS_FAILURE,
    ex
  }
}

export function fetchTodos(userId) {
  return dispatch => {
    //dispatch(fetchTodosRequest())
    return axios.get(`/api/users/${userId}/lastclass`)
      .then(res => res.json())
      .then(json => dispatch(fetchTodosSuccess(json.body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)))
  }
}