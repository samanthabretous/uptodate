import s from './styles';

export default {
  overallRules: {
    '*': {
      margin: 0,
      fontFamily: 'Muli, sans-serif',
      boxSizing: 'border-box',
    },
    '*:after, *:before': {
      boxSizing: 'border-box',
    },
    body: {
      margin: 0,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
    button: {
      border: 'none',
      background: 'none',
    }
  },
  app: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoBar: {
    height: '100vh',
    backgroundColor: s.colors.mardiGras,
    display: 'flex',
    flex: '0 0 250px',
    flexDirection: 'column',
    color: s.colors.white,
  },
  infoContainer: {
    margin: '20px 20px',
  },
  logo: {
    width: '90%',
    height: 'auto',
  },
  logoImg: {
    width: '100%',
    height: '100%',
  },
  children: {
    flex: '1 0 0',
  },
};
