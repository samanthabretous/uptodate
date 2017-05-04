import styles from '../App/styles';

const { colors: { pomegranate, white, mardiGras } } = styles;

export default {
  signIn: {
    width: '100%',
    height: '100%',
    background: pomegranate,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  areYou: {
    color: white,
    fontSize: '3rem',
    marginTop: '5%',
  },
  position: {
    width: '85%',
    height: '15%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  positionButton: {
    width: '45%',
    height: '100%',
    border: `5px solid ${mardiGras}`,
    background: white,
    color: mardiGras,
    fontSize: '2rem',
    padding: '2%',
    ':hover': {
      background: mardiGras,
      color: white,
    },
  },
  active: {
    background: mardiGras,
    color: white,
  },
};
