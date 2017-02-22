import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Modal, LoginOrSignUp, HomePage, StudentOrTeacher, StudentProfile, Dashboard, Lesson, DisplayClassLessons, AddAssignment, AddLesson, ShowAllAssignments, SubmitWork, ShowAllWork } from './containers';
import { getTitlebarInfo } from '../redux/titlebar';
import { enterGetAssignments } from '../redux/assignment';
import { enterGetStudentInfo } from '../redux/student';
import { enterGetLessons, enterFetchLessons } from '../redux/lesson';
import { enterGetWork } from '../redux/work';

export default (
  <Route component={App} >
    <Route path="/" component={HomePage}>
      <Route component={Modal}>
        <Route path="login" component={LoginOrSignUp} />
        <Route path="student-or-teacher" component={StudentOrTeacher} />
      </Route>
    </Route>

    <Route
      path="dashboard/:user/:currentClassCode/student"
      onEnter={getTitlebarInfo}
      component={Dashboard}
    >
      <IndexRoute component={StudentProfile} onEnter={enterGetStudentInfo} />
    </Route>

    <Route path="dashboard/:user/:currentClassCode" onEnter={getTitlebarInfo} component={Dashboard}>
      <IndexRoute component={DisplayClassLessons} onEnter={enterFetchLessons} />
      <Route component={Modal}>
        <Route path="lesson/:classId" component={AddLesson} />
        <Route path="assignment/:classId" component={AddAssignment} onEnter={enterGetLessons} />
        <Route path="assignment/:classId/submitWork/:assignmentId" component={SubmitWork} />
      </Route>
      <Route
        path="assignment/:classId/showAll"
        component={ShowAllAssignments}
        onEnter={enterGetAssignments}
      />
      <Route
        path="assignment/:classId/viewWork/:assignmentId"
        component={ShowAllWork}
        onEnter={enterGetWork}
      />
      <Route path=":lessonId/:lesson/*" component={Lesson} />
    </Route>
  </Route>
);

