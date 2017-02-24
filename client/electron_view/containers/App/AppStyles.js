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
  },
  app: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoBar: {
    height: '100vh',
    backgroundColor: s.colors.teal,
    display: 'flex',
    flex: '0 0 250px',
    flexDirection: 'column',
    color: s.colors.white,
  },
  infoContainer: {
    margin: '10px 20px',
  },
  children: {
    flex: '1 0 0',
  },
};
