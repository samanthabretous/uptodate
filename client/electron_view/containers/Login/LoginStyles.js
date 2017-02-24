import s from '../App/styles';

export default {
  loginForm: {
    border: '1px solid black',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: s.colors.pomegranate,
  },
  loginHeader: {
    fontFamily: 'Muli-bold, san-serif',
    fontSize: 36,
    marginBottom: 25,
    color: s.colors.mardiGras,
  },
  userInput: {
    border: `3px solid ${s.colors.mardiGras}`,
    fontSize: '1.5em',
    padding: 5,
    width: 350,
    height: 50,
    marginBottom: '2vw',
    color: s.colors.mardiGras,
    textAlign: 'center',
  },
  loginButton: {
    background: s.colors.mardiGras,
    color: s.colors.white,
    fontSize: '1.5em',
    width: 350,
    height: 50,
  },
  webButtons: {
    display: 'flex',
    alignItems: 'flex-end',
    color: s.colors.grannyApple,
    marginTop: 25,
  },
  signupButton: {
    color: s.colors.grannyApple,
    fontSize: '1rem',
    padding: 0,
    margin: 0,
    paddingRight: 10,
    borderRight: `2px solid ${s.colors.grannyApple}`,
    fontFamily: 'Muli-light, san-serif',
  },
  forgot: {
    marginLeft: 10,
    fontFamily: 'Muli-light, san-serif',
    fontSize: '1rem',
  },
};
