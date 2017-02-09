import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, LoginOrSignUp, HomePage, StudentOrTeacher, Dashboard, Lesson, Overview } from './containers';
import { getTitlebarInfo } from '../redux/titlebar';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="login" component={LoginOrSignUp} />
    <Route path="student-or-teacher" component={StudentOrTeacher} />
    <Route path="dashboard/:user/:currentClassCode" onEnter={getTitlebarInfo} component={Dashboard}>
      <IndexRoute component={Overview} />
      <Route path=":lesson" component={Lesson} />
    </Route>
  </Route>
);
