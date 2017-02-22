import s from './styles';

export default {
  overallRules: {
    '*': {
      margin: 0,
      fontFamily: 'Muli, sans-serif',
    },
    body: {
      margin: 0,
      boxSizing: 'border-box',
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
    width: 250,
    height: '100vh',
    backgroundColor: s.colors.teal,
    display: 'flex',
    flexDirection: 'column',
    color: s.colors.white,
  },
  infoContainer: {
    margin: '10px 20px',
  },
};
