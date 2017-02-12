import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      enrollmentCode: '',
      createClass: null,
      position: '',
      nameErrors: {},
    };
    this.setPosition = this.setPosition.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enterClassRoom = this.enterClassRoom.bind(this);
    this.enterOrCreateClass = this.enterOrCreateClass.bind(this);
  }

  setPosition(position) {
    this.setState({ position });
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

  enterClassRoom() {
    
  }

  render() {
    const { position, createClass } = this.state;
    const enterClassroomStyle = {
      display: position === 'Student' || position === 'Instructor' && createClass === false ? 'initial' : 'none',
    };

    const isInstructorStyle = {
      display: position === 'Instructor' ? 'initial' : 'none',
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
        {/* if student or if instructor and entering a classroom */}
        <form onSubmit={this.enterClassRoom}>
          <input type="text" placeholder="Enter first name" name="firstName" onChange={this.handleChange} /> <br />
          <input type="text" placeholder="Enter last name" name="lastName" onChange={this.handleChange} /> <br />
          <input style={enterClassroomStyle} type="text" placeholder="Enter enrollment code" name="enrollmentCode" onChange={this.handleChange} /> <br />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentOrTeacher);
