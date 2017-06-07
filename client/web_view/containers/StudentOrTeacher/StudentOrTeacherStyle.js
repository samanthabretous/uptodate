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
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    margin: '0 auto',
  },
  names: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameInput: {
    width: '47%',
  },
  input: {
    marginTop: '5%',
    background: white,
    fontSize: '1.5rem',
    border: `5px solid ${mardiGras}`,
    padding: '2%',
    width: '100%',
    textAlign: 'center',
  },
  or: {
    marginTop: '3%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  line: {
    height: 5,
    width: '35%',
    background: mardiGras,
  },
  enter: {
    marginTop: '3%',
    background: mardiGras,
    width: '100%',
    fontSize: '1.5rem',
    padding: '2%',
    color: white,
  },
};
