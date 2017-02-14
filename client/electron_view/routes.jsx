import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Login, AddLesson } from './containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="drop-file"component={AddLesson} />
  </Route>
);
