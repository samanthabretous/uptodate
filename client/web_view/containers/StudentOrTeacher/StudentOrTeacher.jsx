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
      position: '',
      nameErrors: {},
    };
    this.setPosition = this.setPosition.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enterClassRoom = this.enterClassRoom.bind(this);
  }

  setPosition(position) {
    this.setState({ position });
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
    return (
      <div>
        <h2>Are you?</h2>
        <div>
          <button onClick={() => this.setPosition('Student')}>Student</button>
          <button onClick={() => this.setPosition('Instructor')}>Instructor</button>
        </div>
        <form onSubmit={this.enterClassRoom}>
          <input type="text" name="firstName" onChange={this.handleChange} />
          <input type="text" name="lastName" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentOrTeacher);
