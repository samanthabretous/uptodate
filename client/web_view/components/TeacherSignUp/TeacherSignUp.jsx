import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './TeacherSignUpStyle';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

const mapStateToProps = state => ({
  email: state.login.email,
  username: state.login.username,
  password: state.login.password,
});

class TeacherSignUp extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render(){
    return (
      <form>

      </form>
    );
  }
}

TeacherSignUp.propTypes = {

};

TeacherSignUp.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherSignUp);
