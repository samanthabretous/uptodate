import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = JSON.parse(localStorage.getItem('state')) || {};

export default createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));
