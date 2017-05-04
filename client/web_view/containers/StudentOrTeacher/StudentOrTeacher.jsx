import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { StudentSignUp, TeacherSignUp } from '../../components';
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
      showForm: false,
    };
    this.addPosition = this.addPosition.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }
  addPosition(position) {
    this.setState({ position, showForm: true });
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
    const { position, showForm } = this.state;

    return (
      <section style={style.signIn}>
        <h1 style={style.areYou}>ARE YOU?</h1>
        <div style={style.position}>
          {this.renderButton('student')}
          {this.renderButton('teacher')}
        </div>
        {showForm && position === 'student'
          ? <StudentSignUp position={position} />
          : <TeacherSignUp position={position} />
        }
      </section>
    );
  }
}

StudentOrTeacher.propTypes = {

};

StudentOrTeacher.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(StudentOrTeacher));
