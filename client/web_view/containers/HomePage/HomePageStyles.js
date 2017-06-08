import styles from '../App/styles';

const { colors } = styles;

export default {
  homepage: {
    backgroundColor: colors.mardiGras,
    height: '100vh',
  },
  homebar: {
    color: colors.white,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '35px 5%',
  },
  logoContainer: {
    width: '15vw',
    height: 'auto',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  loginButton: {
    background: colors.pomegranate,
    border: 'none',
    height: 60,
    width: 200,
    color: colors.white,
    fontSize: '1.5em',
    ':hover': {
      background: colors.white,
      color: colors.pomegranate,
    },
  },
  topSection: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 5%',
    marginTop: '30px',
  },
  headlineContainer: {
    width: '60%',
  },
  headline: {
    margin: 0,
    font: '4.2em Muli-bold, san-serif',
    color: colors.grannyApple,
    letterSpacing: '-3px',
    lineHeight: '95%',
  },
  tagline: {
    font: '2.4em Muli-light, san-serif',
    color: colors.white,
    lineHeight: '95%',
    marginTop: '3%',
  },
};
