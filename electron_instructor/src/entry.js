
var ReactDom = require('react-dom');

import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>Hello from App!</div>
    );
  }
}


ReactDom.render(<App/>, document.getElementById('react-root'));