import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import store from '../redux/createStore';
import routes from './routes';

// socket
import SocketListeners from './socket/socket';

SocketListeners(store);

const renderApp = (CurrentRoute) => {
  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={CurrentRoute} />
    </Provider>,
    document.getElementById('root'));
};

renderApp(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default;
    renderApp(nextRoutes);
  });
}
