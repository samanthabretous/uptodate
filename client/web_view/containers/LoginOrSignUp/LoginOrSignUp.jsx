import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Radium from 'radium';
import { signUpInfoAction, userInfoAction, studentTeacherModalAction } from '../../../redux/login';
import style from './LoginOrSignUpStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    signUpInfoAction,
    userInfoAction,
    studentTeacherModalAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

class LoginOrSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormErrors: {},
      username: '',
      email: '',
      password: '',
      authenticationError: null,
    };
    this.isValidEmail = this.isValidEmail.bind(this);
    this.isValidPassword = this.isValidPassword.bind(this);
    this.checkFormValidation = this.checkFormValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  isValidEmail(email) {
    return email.indexOf('@') === -1 && email.indexOf('.' === -1);
  }
  isValidPassword(password) {
    return password.length < 6;
  }

  checkFormValidation(errors) {
    this.setState(prevState => ({
      loginFormErrors: Object.assign({}, prevState.loginFormErrors, errors),
    }));
  }

  handleChange(event) {
    const { loginFormErrors } = this.state;

    // change the component state based off  input
    const updateWhichInput = () => {
      this.setState({ [event.target.name]: event.target.value });
    };


    if (loginFormErrors[event.target.name]) {
      const errors = Object.assign({}, loginFormErrors);
      delete errors[event.target.name];
      updateWhichInput();
      this.checkFormValidation(errors);
    } else {
      updateWhichInput();
    }
  }

  /* check the form to make sure the user enter the required data
  * do this before sending user infomation over to the back end*/
  handleSubmit(home) {
    const { username, email, password } = this.state;
    // form validation
    const errors = {};
    if (username === '') errors.username = 'Can not be empty';
    // only check email if the user is signing up
    if (home) {
      if (this.isValidEmail(email)) errors.email = 'Must be a valid email';
    }
    if (this.isValidPassword(password)) errors.password = 'Password must be at least 6 characters long';
    this.checkFormValidation(errors);

    // before sending form request to back end check to make sure there are no errors
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      /* if user is trying to sign up to the site
       * send info to the store
       * then continue asking questions on the next page
       */
      if (home) {
        this.props.signUpInfoAction(username, email, password);
        this.props.router.push('/student-or-teacher');
      } else {
        axios.post('/api/users/authentication', {
          username,
          password,
        })
        .then((res) => {
          if (res.data) {
            // send logged in user information to the store
            this.props.userInfoAction(res.data);
            // take user to the dashboard
            const currentClassCode = res.data.currentClass.enrollmentCode;
            localStorage.classCode = JSON.stringify(currentClassCode);
            // displays different dashboard depending on whether user is a student or educator
            this.props.router.push(`/dashboard/${res.data.id}/${res.data.currentClass.enrollmentCode}`);
          }
        })
        .catch(() => {
          this.setState({ authenticationError: true });
        });
      }
    }
  }

  renderInput(type) {
    const { loginFormErrors } = this.state;
    return (
      <div style={style.userInputContainer}>
        {/* display error message when user enters infomation incorrectly */}
        {loginFormErrors[type] && <span style={style.formErrors}>{loginFormErrors[type]}</span>}
        <input
          style={[style.userInput, loginFormErrors[type] && style.formErrorsInput]}
          id={type}
          type={type === 'password' ? 'password' : 'text'}
          onChange={this.handleChange}
          name={`${type}`}
          value={this.state[type]}
          placeholder={`Enter ${type}`}
        />
      </div>
    );
  }

  render() {
    const { authenticationError } = this.state;
    const { home } = this.props;
    return (
      <div
        style={home
        ? style.signupForm
        : style.loginForm}
      >
        <div style={home ? style.form : style.modalForm}>
          {!home && <h2 style={style.welcome}>WELCOME BACK</h2>}
          {/* render input box if user is trying to sign up */}
          {home && this.renderInput('email')}
          {this.renderInput('username')}
          {this.renderInput('password')}
          <button style={[style.signupButton, !home && style.login]} onClick={() => this.handleSubmit(home)}>
            {home
              ? 'Sign up for free'
              : 'Enter Classroom'
            }
          </button>
          {authenticationError && <span>There was an error logging in.</span>}
        </div>
      </div>
    );
  }
}

LoginOrSignUp.propTypes = {
  router: PropTypes.object.isRequired,
  pathname: PropTypes.string,
  signUpInfoAction: PropTypes.func.isRequired,
  userInfoAction: PropTypes.func.isRequired,
  home: PropTypes.bool,
};

LoginOrSignUp.defaultProps = {
  pathname: '/login',
  home: false,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(LoginOrSignUp)));
