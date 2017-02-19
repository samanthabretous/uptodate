import colors from '../../containers/App/colors';

export default {
  dashbar: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: 100,
    width: '100vw',
    height: '15vh',
  },
  firstDashbar: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: colors.teal,
    height: '35%',
    color: colors.white,
  },
  logo: {
    fontSize: '2em',
    margin: 0,
  },
  firstName: {
    fontSize: '2em',
    margin: 0,
  },
  secondDashbar: {
    display: 'flex',
    backgroundColor: colors.orange,
    height: '65%',
  },
  classInfo: {
    display: 'flex',
  },
  className: {
    fontSize: '2.2em',
    margin: 0,
  },
  enrollmentCode: {
    margin: 0,
  },
  classUserInfo: {
    display: 'flex',
  },
  userTotal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  type: {
    fontSize: '1em',
    margin: 0,
  },
  amount: {
    fontSize: '1.5em',
    color: colors.white,
    margin: 0,
  },
};
