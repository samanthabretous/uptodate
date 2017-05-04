import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './StudentSignUpStyle';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

const mapStateToProps = state => ({
  email: state.login.email,
  username: state.login.username,
  password: state.login.password,
});

class StudentSignUp extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render(){
    return (
      <div></div>
    );
  }
}

StudentSignUp.propTypes = {

};

StudentSignUp.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(StudentSignUp);
