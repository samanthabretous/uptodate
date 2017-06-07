import styles from '../App/styles';

const { colors: { white, mardiGras, grannyApple, pomegranate } } = styles;

export default {
  loginForm: {
    background: pomegranate,
    width: '100%',
    height: '100%',
  },
  signupForm: {
    width: '35%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  modalForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: '85%',
    height: '100%',
  },
  welcome: {
    color: white,
    fontSize: '3rem',
    marginBottom: '3%',
  },
  userInputContainer: {
    width: '100%',
  },
  userInput: {
    width: '100%',
    fontSize: '1.5em',
    height: 50,
    marginBottom: '2vw',
    color: mardiGras,
    textAlign: 'center',
  },
  formErrorsInput: {
    background: pomegranate,
    opacity: '.5',
    color: white,
  },
  formErrors: {
    color: white,
  },
  signupButton: {
    background: grannyApple,
    color: pomegranate,
    border: 'none',
    fontSize: '1.5em',
    width: '100%',
    height: 50,
  },
  login: {
    background: mardiGras,
    color: white,
  },
  forgot: {
    marginLeft: 10,
    fontFamily: 'Muli-light, san-serif',
    fontSize: '1rem',
  },

};
