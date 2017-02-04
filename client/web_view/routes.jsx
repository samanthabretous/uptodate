import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, LoginContainer } from './containers';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={LoginContainer} />
  </Route>
);
