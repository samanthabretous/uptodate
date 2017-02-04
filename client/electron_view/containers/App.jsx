import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

export class App extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

