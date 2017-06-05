import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Radium from 'radium';
import s from 'underscore.string';
import { studentTeacherModalAction } from '../../../redux/login';
import style from './StudentOrTeacherStyle';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    studentTeacherModalAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  email: state.login.email,
  username: state.login.username,
  password: state.login.password,
});

class StudentOrTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'sam',
      lastName: 'smith',
      name: '',
      description: '',
      schedule: '',
      location: '',
      enrollmentCode: 'fullstackweb819',
      createClass: false,
      position: '',
      registrationError: null,
    };
    this.setPosition = this.setPosition.bind(this);
    this.handleWhichSubmit = this.handleWhichSubmit.bind(this);
    this.confirmClass = this.confirmClass.bind(this);
    this.createNewClass = this.createNewClass.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  setPosition(position) {
    event.target.name === 'createClass'
    ? this.setState({ position, createClass: true })
    : this.setState({ position, createClass: false })
  }

  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRegistration(data) {
    let userData = null;
    axios.post('/api/users/registration', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.props.email,
      username: this.props.username,
      password: this.props.password,
      position: this.state.position,
      lastClassViewed: data.enrollmentCode,
      classId: data.id,
    })
    .then((res) => {
      userData = res.data;
      return localStorage.classCode = JSON.stringify(res.data.lastClassViewed);
    })
    .then(() => {
      this.props.router.push(`/dashboard/${userData.id}/${userData.lastClassViewed}`)
    })
    .catch(() => {
      this.setState({ registrationError: true });
    });
  }

// handles registration when user already has enrollment code
  confirmClass() {
    console.log(this.state.position);
    axios.get(`/api/classes/${this.state.enrollmentCode}`)
    .then(({ data }) => {
      console.log(data);
      this.handleRegistration(data);
    })
    .catch(() => {
      this.setState({ registrationError: true });
    });
  }

// handles instructor registration when instructor also needs to register a new class
  createNewClass() {
    axios.post('/api/classes/newclass', {
      name: this.state.name,
      description: this.state.description,
      schedule: this.state.schedule,
      location: this.state.location,
    })
    .catch(() => {
      this.setState({ registrationError: true });
    })
    .then(res => (
      res.data
    ))
    .then((data) => {
      this.handleRegistration(data);
    });
  }

  handleWhichSubmit() {
    const { position, createClass } = this.state;
    if (position === 'student' || !createClass) {
      this.confirmClass();
    } else if (createClass) {
      this.createNewClass();
    }
  }

  // dynamically creates input fields
  renderInput(field, nameInput) {
    return (
      <input
        style={[style.input, nameInput && style.nameInput]}
        type="text"
        onChange={this.updateInput}
        name={field}
        value={this.state[field]}
        placeholder={`Enter ${field.split(/(?=[A-Z])/).join(' ').toLowerCase()}`}
      />
    );
  }
// dynamically create buttons
  renderButton(name) {
    return (
      <button
        key={name}
        style={[style.positionButton, this.state.position === name && style.active]}
        name={name}
        onClick={() => this.setPosition(name)}
      >
        {s(name).capitalize().value().split(/(?=[A-Z])/).join(' ')}
      </button>
    );
  }

  render() {
    const { position, createClass, registrationError } = this.state;
    return (
      <section style={style.signIn}>
        <h1 style={style.areYou}>ARE YOU?</h1>
        <div style={style.position}>
          {this.renderButton('student')}
          {this.renderButton('teacher')}
        </div>
        {position && <div style={style.form}>
          <div style={style.names}>
            {this.renderInput('firstName', true)}
            {this.renderInput('lastName', true)}
          </div>
          {this.renderInput('enrollmentCode')}
          {position === 'teacher' && <p style={style.or}>
            <span style={style.line} />
            OR
            <span style={style.line} />
          </p>}
          {position === 'teacher' && this.renderInput('createClass')}
          <button style={style.enter} onClick={this.handleWhichSubmit}>Complete Sign-up</button>
          { registrationError && <span>There was an error registering this account.</span> }
        </div>}


      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(StudentOrTeacher));
