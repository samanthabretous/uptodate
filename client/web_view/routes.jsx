import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, LoginOrSignUp, HomePage, StudentOrTeacher, Dashboard, Lesson, ViewInstructorCode } from './containers';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="/login" component={LoginOrSignUp} />
    <Route path="/student-or-teacher" component={StudentOrTeacher} />
    <Route path="/dashboard/:user/:classroom" component={Dashboard} />
    <Route path="/dashboard/:user/:classroom/:lesson" component={Lesson} />
    <Route path="/instructorcode" component={ViewInstructorCode} />
  </Route>
);
