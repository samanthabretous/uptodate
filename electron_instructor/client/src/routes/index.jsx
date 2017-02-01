import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { AppContainer, LoginContainer } from '../components';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={LoginContainer} />
  </Route>
);
