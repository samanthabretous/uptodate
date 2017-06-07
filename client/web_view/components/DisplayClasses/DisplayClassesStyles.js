import styles from '../../containers/App/styles';

const { colors } = styles;

export default {
  displayClasses: {
    position: 'absolute',
    zIndex: 1000,
    top: '16vh',
    background: colors.mardiGras,
    width: '20vw',
    height: '85vh',
    padding: '1% 3%',
    color: colors.white,
    left: '-30vw',
    transition: 'left 500ms',
  },
  slideIn: {
    left: 0,
  },
  ul: {
    height: 'auto',
    font: '1.2em Muli-bold, san-serif',
  },
  listItem: {
    borderBottom: `1px solid ${colors.pomegranate}`,
    paddingBottom: '1%',
  },
  showInputButton: {
    background: colors.pomegranate,
    color: colors.white,
    marginTop: '5%',
    fontSize: '1.2em',
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    marginTop: '5%',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: '1.2em',
    width: '85%',
  },
  addButton: {
    color: colors.white,
    width: '10%',
  },
};
