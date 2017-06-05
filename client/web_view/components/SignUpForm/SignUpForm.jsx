import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './SignUpFormStyle';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

const mapStateToProps = state => ({
  email: state.login.email,
  username: state.login.username,
  password: state.login.password,
});

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      createClass: '',
      enrollmentCode: 'fullstackweb2049',
    };
    this.handleInput = this.handleInput.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  submit(event) {
    event.preventDefault();
    let userData = null;
    console.log("clicked");

    axios.post('/api/users/registration', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.props.username,
      email: this.props.email,
      password: this.props.password,
      position: this.props.position,
      lastClassViewed: this.state.enrollmentCode,
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
  render() {
    return (
      <form style={style.form} onSubmit={this.submit}>
        <input
          name="enrollmentCode"
          onChange={this.handleInput}
          placeholder="enter class code"
          style={style.input}
        />
        {this.props.teacher && <p style={style.or}>
          <span style={style.line} />
          OR
          <span style={style.line} />
        </p>}
        {this.props.teacher && <input
          name="createClass"
          onChange={this.handleInput}
          placeholder="create class"
          style={style.input}
        />}
        <button style={style.enter}>Enter Class</button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  teacher: PropTypes.bool,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

SignUpForm.defaultProps = {
  teacher: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
