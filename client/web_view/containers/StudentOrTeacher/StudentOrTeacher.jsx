import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

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

  handleStudentAndInstructorSubmit(position, firstName, lastName, enrollmentCode) {
    // ADD ERROR HANDLING AND REROUTING
    axios.get(`/api/classes/${enrollmentCode}`)
    .then(res => (
      res.data
    ))
    .then((data) => {
      axios.post('/api/users/registration', {
        firstName,
        lastName,
        email: this.props.state.login.email,
        username: this.props.state.login.username,
        password: this.props.state.login.password,
        position,
        lastClassViewed: data.id,
      });
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
      axios.post('/api/users/registration', {
        firstName,
        lastName,
        email: this.props.state.login.email,
        username: this.props.state.login.username,
        password: this.props.state.login.password,
        position,
        lastClassViewed: data.id,
      });
    });
  }

  handleWhichSubmit() {
    const { position,
            createClass,
            firstName,
            lastName,
            enrollmentCode,
            name,
            description,
            schedule,
            location,
          } = this.state;
    if (position === 'Student' || createClass === false) {
      this.handleStudentAndInstructorSubmit(position, firstName, lastName, enrollmentCode);
    } else if (createClass) {
      this.handleInstructorAndNewClassSubmit(position, firstName, lastName, enrollmentCode, name, description, schedule, location);
    }
  }

  render() {
    console.log(this.state.createClass)
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
          <button onClick={() => this.setPosition('Student')}>Student</button>
          <button onClick={() => this.setPosition('Instructor')}>Instructor</button>
        </div>
        {/* if instructor choose between entering a classroom and creating a classroom */}
        <div style={isInstructorStyle}>
          <button name="enterClass" onClick={this.enterOrCreateClass}>Enter classroom</button>
          <button name="createClass" onClick={this.enterOrCreateClass}>Create class</button> <br />
        </div>

        <input type="text" placeholder="Enter first name" name="firstName" onChange={this.handleChange} /> <br />
        <input type="text" placeholder="Enter last name" name="lastName" onChange={this.handleChange} /> <br />
        {/* if student or if instructor and entering a classroom */}
        <div style={enterClassroomStyle}>
          <input type="text" placeholder="Enter enrollment code" name="enrollmentCode" onChange={this.handleChange} /> <br />
        </div>
        {/* if instructor and creating a class */}
        <div style={createClassStyle}>
          <input type="text" placeholder="Enter class name" name="name" onChange={this.handleChange} /> <br />
          <input type="text" placeholder="Enter class description" name="description" onChange={this.handleChange} /> <br />
          <input type="text" placeholder="Enter class schedule" name="schedule" onChange={this.handleChange} /> <br />
          <input type="text" placeholder="Enter class location" name="location" onChange={this.handleChange} /> <br />
        </div>
        <button onClick={this.handleWhichSubmit}>Complete Sign-up</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentOrTeacher);
