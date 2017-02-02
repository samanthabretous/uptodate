import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, LoginContainer } from '../components';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={LoginContainer} />
  </Route>
);
