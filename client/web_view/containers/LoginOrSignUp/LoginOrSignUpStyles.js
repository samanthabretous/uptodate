import styles from '../App/styles';

const { colors } = styles;

export default {
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupForm: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userInputContainer: {
    width: '100%',
  },
  userInput: {
    width: '100%',
    fontSize: '1.5em',
    height: 50,
    marginBottom: '2vw',
    color: colors.mardiGras,
    textAlign: 'center',
  },
  signupButton: {
    background: colors.grannyApple,
    color: colors.pomegranate,
    border: 'none',
    fontSize: '1.5em',
    width: '100%',
    height: 50,
  },
  forgot: {
    marginLeft: 10,
    fontFamily: 'Muli-light, san-serif',
    fontSize: '1rem',
  },

};
