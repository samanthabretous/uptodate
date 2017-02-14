import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { AddLesson, App, DropFolder, Login } from './containers';
import { getAllClassNames } from '../redux/classes';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="add-lesson/:userId" onEnter={getAllClassNames}component={DropFolder}>
      <IndexRoute component={AddLesson} />
    </Route>
  </Route>
);
