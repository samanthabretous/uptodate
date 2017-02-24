import styles from '../App/styles';

const { colors } = styles;

export default {
  profile: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  schedule: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    border: 'none',
    borderRadius: '1vw',
    backgroundColor: colors.mardiGras,
    color: colors.white,
    fontSize: '1.2em',
    width: '50%',
    height: '8%',
    ':hover': {
      backgroundColor: '#847484',
    },
    ':active': {
      backgroundColor: '#472f46',
    },
  },
  accountInfo: {
    color: colors.red,
  },
  discussions: {

  },
  grades: {

  },
  assignments: {

  },

};
