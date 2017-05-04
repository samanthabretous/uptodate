import styles from '../../containers/App/styles';

const { colors: { white, mardiGras } } = styles;

export default {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    margin: '0 auto',
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
    marginTop: '5%',
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
    marginTop: '5%',
    background: mardiGras,
    width: '100%',
    fontSize: '1.5rem',
    padding: '2%',
    color: white,
  },
};
