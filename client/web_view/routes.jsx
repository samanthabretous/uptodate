import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Modal, LoginOrSignUp, HomePage, StudentOrTeacher, Dashboard, Lesson, DisplayClassLessons, AddAssignment, AddLesson, ShowAllAssignments } from './containers';
import { getTitlebarInfo } from '../redux/titlebar';
import { enterGetAssignments } from '../redux/assignment';
import { enterGetLessons, enterFetchLessons } from '../redux/lesson';

export default (
  <Route component={App} >
    <Route path="/" component={HomePage}>
      <Route component={Modal}>
        <Route path="login" component={LoginOrSignUp} />
        <Route path="student-or-teacher" component={StudentOrTeacher} />
      </Route>
    </Route>

    <Route path="dashboard/:user/:currentClassCode" onEnter={getTitlebarInfo} component={Dashboard}>
      <IndexRoute component={DisplayClassLessons} onEnter={enterFetchLessons} />
      <Route component={Modal}>
        <Route path="lesson/:classId" component={AddLesson} />
        <Route path="assignment/:classId" component={AddAssignment} onEnter={enterGetLessons} />
      </Route>
      <Route
        path="assignment/:classId/showAll"
        component={ShowAllAssignments}
        onEnter={enterGetAssignments}
      />
      <Route path=":lessonId/:lesson/*" component={Lesson} />
    </Route>
  </Route>
);

