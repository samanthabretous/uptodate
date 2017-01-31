import React, { Component } from 'react';
import {render} from 'react-dom';
import configureStore from './store/store';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import routes from './routes'

const state = JSON.parse(localStorage.getItem('state'));
const store = configureStore(state || {});

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  // This is not a magic thing!
  // You need to put whatever changes in *your* project here.
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default // Again, depends on your project
    render(
      <Provider store={store}>
        <Router history={browserHistory} routes={nextRoutes} />
      </Provider>,
      document.getElementById('root')
    )
  })
}




// if (module.hot) {
//   console.log("hot")
//   module.hot.accept('./components/app/App', function() {
//     let newApp = require('./components/app/App').default;
//     console.log("inside")
//     console.log("module", newApp)
//     renderReact(newApp);
//   });
// }


    // <Provider store={store}>
    //   <Router history={browserHistory} routes={routes}/>
    // </Provider>,