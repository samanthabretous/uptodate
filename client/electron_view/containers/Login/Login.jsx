import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { shell } from 'electron';
import { signUpInfoAction, userInfoAction } from '../../../redux/login';
import style from './LoginStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    signUpInfoAction,
    userInfoAction,
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
      username: 'vfrizzle',
      password: 'password1',
      authenticationError: null,
    };
    this.isValidPassword = this.isValidPassword.bind(this);
    this.checkFormValidation = this.checkFormValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  isValidPassword(password) {
    return password.length < 6;
  }

  checkFormValidation(errors) {
    this.setState(prevState => ({
      loginFormErrors: Object.assign(prevState.loginFormErrors, errors),
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
  handleSubmit() {
    const { username, password } = this.state;
    // form validation
    const errors = {};
    if (username === '') errors.username = 'Can not be empty';
    if (this.isValidPassword(password)) errors.password = 'Password must be at least 6 characters long';
    this.checkFormValidation(errors);

    // before sending form request to back end check to make sure there are no errors
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      axios.post('http://localhost:2020/api/users/authentication', {
        username,
        password,
      })
      .then((res) => {
        if (res.data) {
          // send logged in user information to the store
          this.props.userInfoAction(res.data);
          // take user to the dashboard
          this.props.router.push(`/add-lesson/${res.data.id}`);
        }
      })
      .catch(() => {

      });
    }
  }
  handleSignUp() {
    shell.openExternal('http://localhost:2020');
  }

  renderInput(type) {
    const { loginFormErrors } = this.state;
    return (
      <div className={`input ${loginFormErrors[type] ? 'error' : ''}`}>
        <input
          style={style.userInput}
          id={type}
          type={type === 'password' ? 'password' : 'text'}
          onChange={this.handleChange}
          name={type}
          value={this.state[type]}
          placeholder={`Enter ${type}`}
        />
        {/* display error message when user enters infomation incorrectly */}
        {loginFormErrors[type] && <span>{loginFormErrors[type]}</span>}
      </div>
    );
  }

  render() {
    const { authenticationError } = this.state;
    return (
      <div style={style.loginForm}>
        {this.renderInput('username')}
        {this.renderInput('password')}
        <button style={style.signupButton} onClick={this.handleSubmit}>
          Login
        </button>
        <button onClick={this.handleSignUp}>Sign Up</button>
        {authenticationError && <span>There was an error logging in</span>}
      </div>
    );
  }
}

LoginOrSignUp.propTypes = {
  router: PropTypes.object.isRequired,
  pathname: PropTypes.string,
  signUpInfoAction: PropTypes.func.isRequired,
  userInfoAction: PropTypes.func.isRequired,
};

LoginOrSignUp.defaultProps = {
  pathname: '/login',
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrSignUp);

