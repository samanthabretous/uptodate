import styles from '../App/styles';

const { colors } = styles;

export default {
  notifications: {
    '.green': {
      background: colors.grannyApple,
    },
    '.salty': {
      background: colors.saltpan,
    },
  },
  profile: {
    margin: '2%',
    display: 'flex',
    justifyContent: 'space-around',
    height: '100%',
    width: '100vw',
  },
  stats: {
    flexDirection: 'column',
    flex: '4 0 0',
    height: '100%',
    width: '40%',
    display: 'flex',
    justifyContent: 'space-between',
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
    flex: '9 0 0',
    height: '100%',
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    border: `5px solid ${colors.lusty}`,
    font: '1em Muli-light, san-serif',
    marginRight: '3%',
    dueDate: {
      background: colors.mardiGras,
      color: colors.white,
      width: '100%',
      padding: '3%',
      textAlign: 'center',
      height: '15%',
      font: '2em Muli-light, san-serif',
    },
    container: {
      overflow: 'scroll',
      height: '85%',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      padding: '5%',
      justifyContent: 'center',
      ':hover': {
        backgroundColor: '#d2e29c',
      },
    },
    date: {
      margin: 0,
      font: '1.5em Muli-light, san-serif',
      color: colors.pomegranate,
    },
    arrow: {
      position: 'relative',
      right: 0,
      top: 0,
      color: colors.lusty,
    },
    instructions: {
      paddingLeft: '30px',
      paddingRight: '20px',
    },
  },
  grades: {
    flex: '2 0 0',
    width: '100%',
    height: '55%',
    overflow: 'scroll',
    scrollbarAppearance: 'none',
    justifyContent: 'center',
    font: '1em Muli-light, san-serif',
    border: `5px solid ${colors.lusty}`,
    ':hover': {
      backgroundColor: '#e5efc7',
    },
    userGrades: {
      color: colors.white,
      background: colors.pomegranate,
      height: '15%',
      width: '100%',
      textAlign: 'center',
    },
    ul: {
      overflow: 'scroll',
      margin: 0,
      padding: '2%',
    },
    li: {
      padding: '2% 0',
      display: 'flex',
      borderBottom: `1px solid ${colors.lusty}`,
      ':hover': {
        backgroundColor: '#d2e29c',
      },
    },
    grade: {
      border: `5px solid ${colors.pomegranate}`,
      color: colors.lusty,
      font: '1.7em Muli-bold, san-serif',
      marginRight: '1%',
      padding: '3%',
    },
    date: {
      paddingLeft: '2%',
    },
  },
  discussions: {
    flex: '2 0 0',
    height: '40%',
    justifyContent: 'center',
    font: '1em Muli-light, san-serif',
    marginTop: '3%',
    border: `5px solid ${colors.lusty}`,
    ':hover': {
      backgroundColor: '#e5efc7',
    },
    userComments: {
      color: colors.white,
      background: colors.lusty,
      height: '15%',
      width: '100%',
      textAlign: 'center',
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
