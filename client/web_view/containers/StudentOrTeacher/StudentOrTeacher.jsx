import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import s from 'underscore.string';
import { studentTeacherModalAction } from '../../../redux/login';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    studentTeacherModalAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  state,
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
      nameErrors: {},
    };
    this.setPosition = this.setPosition.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enterOrCreateClass = this.enterOrCreateClass.bind(this);
    this.handleWhichSubmit = this.handleWhichSubmit.bind(this);
    this.handleStudentAndInstructorSubmit = this.handleStudentAndInstructorSubmit.bind(this);
    this.handleInstructorAndNewClassSubmit = this.handleInstructorAndNewClassSubmit.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderButton = this.renderButton.bind(this);
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

  handleChange(event) {
    const { nameErrors } = this.state;
    const checkFormValidation = (errors) => {
      this.setState(prevState => ({
        loginFormErrors: Object.assign(prevState.loginFormErrors, errors),
      }));
    };
    // change the component state based off  input
    const updateWhichInput = () => {
      this.setState({ [event.target.name]: event.target.value });
    };

    /*
    * when the user enter in the wrong infomation
    * add the type of error to the object
    */
    if (nameErrors[event.target.name]) {
      const errors = Object.assign({}, nameErrors);
      delete errors[event.target.name];
      updateWhichInput();
      checkFormValidation(errors);
    } else {
      updateWhichInput();
    }
  }

  handleRegistration(position, firstName, lastName, data) {
    axios.post('/api/users/registration', {
      firstName,
      lastName,
      email: this.props.state.login.email,
      username: this.props.state.login.username,
      password: this.props.state.login.password,
      position,
      lastClassViewed: data.id,
    });
  }

  handleStudentAndInstructorSubmit(position, firstName, lastName, enrollmentCode) {
    axios.get(`/api/classes/${enrollmentCode}`)
    .then(res => (
      res.data
    ))
    .then((data) => {
      this.handleRegistration(position, firstName, lastName, data);
    });
  }

  handleInstructorAndNewClassSubmit(position, firstName, lastName, enrollmentCode, name, description, schedule, location) {
    axios.post('/api/classes/newclass', {
      name,
      description,
      schedule,
      location,
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

  renderInput(field) {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          name={field}
          value={this.state[field]}
          placeholder={'Enter ' + field.split(/(?=[A-Z])/).join(' ').toLowerCase()}
        />
      </div>
    );
  }

  renderButton(name, clickHandler, style) {
    return (
      <div>
        <button name={name} onClick={clickHandler}>
          {name.split(/(?=[A-Z])/).join(' ').toLowerCase()}
        </button>
      </div>
    );
  }

  render() {
    const { position, createClass } = this.state;
    const enterClassroomStyle = {
      display: position === 'Student' || position === 'Instructor' && createClass === false ? 'initial' : 'none',
    };

    const isInstructorStyle = {
      display: position === 'Instructor' ? 'initial' : 'none',
    };

    const createClassStyle = {
      display: createClass ? 'initial' : 'none',
    };

    return (
      <div>
        <h2>Are you?</h2>
        {/* Choose between student or instructor */}
        <div>
          {this.renderButton('Student', () => this.setPosition('Student'))}
          {this.renderButton('Instructor', () => this.setPosition('Instructor'))}
        </div>
        {/* if instructor choose between entering a classroom and creating a classroom */}
        <div style={isInstructorStyle}>
          <button name="enterClass" onClick={this.enterOrCreateClass}>Enter classroom</button>
          <button name="createClass" onClick={this.enterOrCreateClass}>Create class</button> <br />
        </div>
        <div>
          {this.renderInput('firstName')}
          {this.renderInput('lastName')}
        </div>
        {/* if student or if instructor and entering a classroom */}
        <div style={enterClassroomStyle}>
          {this.renderInput('enrollmentCode')}
        </div>
        {/* if instructor and creating a class */}
        <div style={createClassStyle}>
          {this.renderInput('name')}
          {this.renderInput('description')}
          {this.renderInput('schedule')}
          {this.renderInput('location')}
        </div>
        <button onClick={this.handleWhichSubmit}>Complete Sign-up</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentOrTeacher);
