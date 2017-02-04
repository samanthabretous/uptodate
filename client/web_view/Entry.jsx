import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../redux/createStore';
import routes from './routes';

const state = JSON.parse(localStorage.getItem('state'));
const store = configureStore(state || {});

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default;
    render(
      <Provider store={store}>
        <Router history={browserHistory} routes={nextRoutes} />
      </Provider>,
      document.getElementById('root'));
  });
}
