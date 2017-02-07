import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, LoginOrSignUp, HomePage, StudentOrTeacher } from './containers';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="/login" component={LoginOrSignUp} />
    <Route path="/student-or-teacher" component={StudentOrTeacher} />
  </Route>
);
