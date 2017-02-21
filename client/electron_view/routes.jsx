import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, DropFolder, Login, WatchLesson, Welcome } from './containers';
import { getAllClassNames } from '../redux/classes';

export default (
  <Route component={DropFolder} >
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="welcome" component={Welcome} />
      <Route
        path="add-lesson/:userId/:currentClassCode"
        onEnter={getAllClassNames}
        component={WatchLesson}
      />
    </Route>
  </Route>
);
