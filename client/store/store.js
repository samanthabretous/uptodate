import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../combineReducers';

export default preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

