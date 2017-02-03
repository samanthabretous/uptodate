import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { AppContainer, LoginContainer, DragAndDropContainer } from '../components';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={LoginContainer} />
    <Route path="drop-file"component={DragAndDropContainer} />
  </Route>
);
