import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
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
      firstName: '',
      lastName: '',
      name: '',
      description: '',
      schedule: '',
      location: '',
      enrollmentCode: '',
      createClass: null,
      position: '',
      registrationError: null,
    };
    this.setPosition = this.setPosition.bind(this);
    this.enterOrCreateClass = this.enterOrCreateClass.bind(this);
    this.handleWhichSubmit = this.handleWhichSubmit.bind(this);
    this.handleStudentAndInstructorSubmit = this.handleStudentAndInstructorSubmit.bind(this);
    this.handleInstructorAndNewClassSubmit = this.handleInstructorAndNewClassSubmit.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.updateWhichInput = this.updateWhichInput.bind(this);
  }

  setPosition(position) {
    if (position === 'Student') {
      this.setState({ position, createClass: null });
    } else {
      this.setState({ position });
    }
  }

  enterOrCreateClass(e) {
    if (e.target.name === 'createClass') {
      this.setState({ createClass: true });
    } else {
      this.setState({ createClass: false });
    }
  }

  updateWhichInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegistration(position, firstName, lastName, data) {
    let userData = null;
    axios.post('/api/users/registration', {
      firstName,
      lastName,
      email: this.props.email,
      username: this.props.username,
      password: this.props.password,
      position,
      lastClassViewed: data.enrollmentCode,
    })
    .then((res) => {
      userData = res.data;
      return localStorage.classCode = JSON.stringify(res.data.lastClassViewed);
    })
    .then(() => {
      userData.position === 'Student'
      ? this.props.router.push(`/dashboard/${userData.id}/${userData.lastClassViewed}/student`)
      : this.props.router.push(`/dashboard/${userData.id}/${userData.lastClassViewed}`);
    })
    .catch((err) => {
      this.setState({ registrationError: true });
    });
  }

// handles registration when user already has enrollment code
  handleStudentAndInstructorSubmit(position, firstName, lastName, enrollmentCode) {
    axios.get(`/api/classes/${enrollmentCode}`)
    .then(res => (
      res.data
    ))
    .catch(() => {
      this.setState({ registrationError: true });
    })
    .then((data) => {
      this.handleRegistration(position, firstName, lastName, data);
    });
  }

// handles instructor registration when instructor also needs to register a new class
  handleInstructorAndNewClassSubmit(position, firstName, lastName, enrollmentCode, name, description, schedule, location) {
    axios.post('/api/classes/newclass', {
      name,
      description,
      schedule,
      location,
    })
    .catch(() => {
      this.setState({ registrationError: true });
    })
    .then(res => (
      res.data
    ))
    .then((data) => {
      this.handleRegistration(position, firstName, lastName, data);
    });
  }

  handleWhichSubmit() {
    const { position, createClass, firstName, lastName, enrollmentCode, name, description, schedule, location } = this.state;
    if (position === 'Student' || createClass === false) {
      this.handleStudentAndInstructorSubmit(position, firstName, lastName, enrollmentCode);
    } else if (createClass) {
      this.handleInstructorAndNewClassSubmit(position, firstName, lastName, enrollmentCode, name, description, schedule, location);
    }
  }
// dynamically creates input fields
  renderInput(field, inputStyle) {
    return (
      <div style={inputStyle}>
        <input
          type="text"
          onChange={this.updateWhichInput}
          name={field}
          value={this.state[field]}
          placeholder={`Enter ${field.split(/(?=[A-Z])/).join(' ').toLowerCase()}`}
        />
      </div>
    );
  }
// dynamically create buttons
  renderButton(name, clickHandler, buttonStyle) {
    return (
      <div style={buttonStyle}>
        <button name={name} onClick={clickHandler}>
          {s(name).capitalize().value().split(/(?=[A-Z])/).join(' ')}
        </button>
      </div>
    );
  }

  render() {
    const { position, createClass, registrationError } = this.state;
    // array of buttons we want to create
    const buttons = [
      { name: 'Student',
        clickHandler: () => this.setPosition('Student'),
      },
      { name: 'Instructor',
        clickHandler: () => this.setPosition('Instructor'),
      },
      { name: 'enterClass',
        clickHandler: this.enterOrCreateClass,
        style: style.isInstructorStyle(position),
      },
      { name: 'createClass',
        clickHandler: this.enterOrCreateClass,
        style: style.isInstructorStyle(position),
      },
    ];
    // array of inputs we want to create
    const inputs = [
      { name: 'firstName' },
      { name: 'lastName' },
      { name: 'enrollmentCode',
        style: style.enterClassroomStyle(position, createClass).signupForm,
      },
      { name: 'name',
        style: style.createClassStyle(position, createClass),
      },
      { name: 'description',
        style: style.createClassStyle(position, createClass),
      },
      { name: 'schedule',
        style: style.createClassStyle(position, createClass),
      },
      { name: 'location',
        style: style.createClassStyle(position, createClass),
      },
    ];
// map over buttons/inputs arrays to create 
    const renderButtons = buttons.map((val, idx) => (
      <div key={idx}>
        {this.renderButton(val.name, val.clickHandler, val.style)}
      </div>
      ));

    const renderInputs = inputs.map((val, idx) => (
      <div key={idx}>
        {this.renderInput(val.name, val.style)}
      </div>
    ));

    return (
      <div>
        <h2>Are you?</h2>
        {renderButtons}
        {renderInputs}
        <button onClick={this.handleWhichSubmit}>Complete Sign-up</button>
        { registrationError && <span>There was an error registering this account.</span> }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentOrTeacher);
