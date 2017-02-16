import colors from './colors';

export default {
  overallRules: {
    '*': {
      margin: 0,
    },
    body: {
      margin: 0,
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      boxSizing: 'border-box',
    },
    h3: {
      fontSize: '.7em',
    },
    ul: {
      margin: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  infoBar: {
    width: '100vw',
    height: '15vh',
    backgroundColor: colors.teal,
    display: 'flex',
    justifyContent: 'space-between',
    color: colors.white,
  },
};
