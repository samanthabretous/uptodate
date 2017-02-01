import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import routes from './routes';

const state = JSON.parse(localStorage.getItem('state'));
const store = configureStore(state || {});

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default;
    render(
      <Provider store={store}>
        <Router history={hashHistory} routes={nextRoutes} />
      </Provider>,
      document.getElementById('root')
    );
  });
}
