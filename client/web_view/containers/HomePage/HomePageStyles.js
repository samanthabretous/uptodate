import colors from '../App/colors';

export default {
  homebar: {
    backgroundColor: colors.teal,
    color: colors.white,
    textAlign: 'center',
    display: 'flex',
    alignContent: 'center',

    height: '10vh',
  },
  logo: {
    border: '1px solid black',
    width: '40%',
    height: '90%',
  },
  loginButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: colors.black,
    fontSize: '1.2em',
    ':hover': {
      background: colors.white,
    },
  },
  topSection: {
    width: '100vw',
    height: '90vh',
    display: 'flex',
    justifyContent: 'space-around',
  },
  headlineContainer: {
    border: '1px solid black',
    width: '45%',
  },
  headline: {
    fontSize: '3em',
    margin: 0,
  },
  tagline: {
    fontSize: '2em',
  },
};
