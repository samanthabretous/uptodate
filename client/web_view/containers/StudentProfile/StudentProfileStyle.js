import styles from '../App/styles';

const { colors } = styles;

export default {
  profile: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: colors.saltpan,
    height: '100vh',
    width: '100vw',
  },
  stats: {
    flexDirection: 'column',
    flex: '4 0 0',
    height: '615px',
  },
  button: {
    border: 'none',
    borderRadius: '1vw',
    backgroundColor: colors.mardiGras,
    color: colors.white,
    fontSize: '1.2em',
    width: '50%',
    height: '8%',
    ':hover': {
      backgroundColor: '#847484',
    },
    ':active': {
      backgroundColor: '#472f46',
    },
  },
  assignments: {
    // borderStyle: 'solid',
    // borderColor: 'Blue',
    flex: '9 0 0',
    height: '615px',
    overflow: 'scroll',
    borderRight: `solid ${colors.mardiGras} 1px`,
    item: {
      justifyContent: 'center',
      ':hover': {
        backgroundColor: '#d2e29c',
      },
    },
    instructions: {
      paddingLeft: '30px',
      paddingRight: '20px',
    },
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '50px',
    paddingRight: '40px',
    ':hover': {
      backgroundColor: '#e5efc7',
    },
  },
  grades: {
    height: '250px',
    flex: '2 0 0',
    overflow: 'scroll',
    padding: '0 20px 20px 20px',
    scrollbarAppearance: 'none',
    justifyContent: 'center',
    borderBottom: `solid ${colors.mardiGras} 1px`,
    ':hover': {
      backgroundColor: '#e5efc7',
    },
    li: {
      paddingBottom: '13px',
      ':hover': {
        backgroundColor: '#d2e29c',
      },
    },
    span: {
      color: colors.pomegranate,
    },
  },
  discussions: {
    flex: '2 0 0',
    height: '400px',
    overflow: 'scroll',
    justifyContent: 'center',
    padding: '0 20px 20px 20px',
    ':hover': {
      backgroundColor: '#e5efc7',
    },
    comment: {
      paddingBottom: '13px',
      ':hover': {
        backgroundColor: '#d2e29c',
      },
    },
  },
  schedule: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1 0 0',
  },
  accountInfo: {
    color: colors.red,
  },
};
