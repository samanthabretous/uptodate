import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>Whats up!!!
        HELLO!!
        HELLO!!
        HELLO!!
        HELLO!!
        HELLO!!
        HELLO!!
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

