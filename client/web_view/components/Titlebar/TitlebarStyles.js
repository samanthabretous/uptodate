import styles from '../../containers/App/styles';

const { colors } = styles;

export default {
  dashbar: {
    display: 'flex',
    boxSiing: 'border-box',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: 100,
    width: '100vw',
  },
  firstDashbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: colors.mardiGras,
    height: '8vh',
    width: '100vw',
    color: colors.white,
    padding: '0 5%',
  },
  logoContainer: {
    width: '25%',
    height: '100%',
    paddingTop: '.5%',
  },
  logo: {
    width: 'auto',
    height: '85%',
  },
  firstName: {
    font: '1.5em Muli-light',
    margin: '1%',
  },
  secondDashbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: colors.pomegranate,
    height: '8vh',
    width: '100vw',
    padding: '0 0 0 5%',
  },
  classInfo: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  classnameContainer: {
    display: 'flex',
    width: 'auto',
    padding: '0 1%',
    height: '100%',
    alignItems: 'center',
    color: colors.mardiGras,
    marginRight: '5%',
  },
  className: {
    font: '2em Muli-extra-light, san-serif',
    margin: 0,
  },
  chevron: {
    marginLeft: '3%',
    background: 'none',
  },
  classUserInfo: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '20vw',
  },
  userTotal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  studentInfo: {
    padding: '0 5%',
    borderRight: `2px solid ${colors.mardiGras}`,
  },
  instructorInfo: {
    paddingLeft: '5%',
  },
  type: {
    font: '1em Muli-bold',
    color: colors.mardiGras,
    margin: 0,
  },
  amount: {
    fontSize: '1.5em',
    color: colors.white,
    margin: 0,
  },
  assignLesson: {
    width: '45vw',
    height: '100%',
    display: 'flex',
  },
};
