import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { SignUpForm } from '../../components';
import style from './StudentOrTeacherStyle';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

const mapStateToProps = state => ({
  email: state.login.email,
  username: state.login.username,
  password: state.login.password,
});

class StudentOrTeacher extends Component {
  constructor() {
    super();
    this.state = {
      position: '',
    };
    this.addPosition = this.addPosition.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }
  addPosition(position) {
    this.setState({ position });
  }
  renderButton(type) {
    return (
      <button
        key={type}
        style={[style.positionButton, this.state.position === type && style.active]}
        onClick={() => this.addPosition(type)}
      >
        {type.toUpperCase()}
      </button>
    );
  }
  render() {
    const { position } = this.state;

    return (
      <section style={style.signIn}>
        <h1 style={style.areYou}>ARE YOU?</h1>
        <div style={style.position}>
          {this.renderButton('student')}
          {this.renderButton('teacher')}
        </div>
        {position === 'student' && <SignUpForm position={position} />}
        {position === 'teacher' && <SignUpForm position={position} teacher />}
      </section>
    );
  }
}

StudentOrTeacher.propTypes = {

};

StudentOrTeacher.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(StudentOrTeacher));
