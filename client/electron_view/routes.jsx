import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, DropFolder, Login, Main, MakeLesson, WatchLesson, Welcome } from './containers';
import { getAllClassNames } from '../redux/classes';

export default (
  <Route component={DropFolder} >
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="welcome" component={Welcome} />
      <Route path="/:userId/:currentClassCode" component={Main}>
        <Route
          path="add-lesson"
          onEnter={getAllClassNames}
          component={WatchLesson}
        />
        <Route
          path="make-lesson"
          onEnter={getAllClassNames}
          component={MakeLesson}
        />
      </Route>
    </Route>
  </Route>
);
