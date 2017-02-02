import React, { Component } from 'react';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormErrors: {},
      username: '',
      email: '',
      password: '',
      authenticationError: null,
    };
    this.checkFormValidation = this.checkFormValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);
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
    const { username, email, password } = this.state;

    // form validation
    const errors = {};
    if (username === '') errors.username = 'Can not be empty';
    if (email.indexOf('@') === -1 && email.indexOf('.' === -1)) errors.email = 'Must be a vaild email';
    if (password.length < 6) errors.password = 'Password must be at least 6 characters long';
    this.checkFormValidation(errors);

    // before sending form request to back end check to make sure there are no errors
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      console.log('send data to api');
      // fetch('api/login', {
      //   type: 'GET',
      // })
      // .then((user) => {
      //   if (user){

      //   }
      // });

      // display loading signal
      // loginLoadingAction(true)

      // confirm create login info and send user to next page
      // auth.login(isRegistered, username, email, password, (loggedIn) => {
      //   if (!loggedIn) {
      //     return loginErrorAction(true)
      //   }

      //   if (location.state && location.state.nextPathname) {

      //     // if(location.state.nextPathname === '/play'){

      //     // } else {
      //       //if trying to access a authorized page after login it will redirect to the give path or go back to home
      //       router.replace(location.state.nextPathname)
      //     //}
      //   } else {
      //     router.replace('/play')
      //   }
      // })
    }
  }

  renderInput(type, variable) {
    const { loginFormErrors } = this.state;
    return (
      <div className={`input ${!!loginFormErrors[type] ? 'error' : ''}`}>
        <label htmlFor={`${type}`}>{type}</label>
        <input
          id={type}
          type={type === 'password' ? 'password' : 'text'}
          onChange={this.handleChange}
          name={`${type}`}
          value={this.state[variable]}
          placeholder={`Enter ${type}`}
        />
        {/* display error message when user enters infomation incorrectly */}
        {loginFormErrors[type] && <span>{loginFormErrors[type]}</span>}
      </div>
    );
  }

  render() {
    const { username, email, password, authenticationError } = this.state;
    return (
      <div>
        {this.renderInput('username', username)}
        {this.renderInput('email', email)}
        {this.renderInput('password', password)}
        <button onClick={this.handleSubmit}>
          <span>GO</span>
          <i className="fa fa-check" />
        </button>
        {authenticationError && <span>There was an error logging in</span>}
      </div>
    );
  }
}

