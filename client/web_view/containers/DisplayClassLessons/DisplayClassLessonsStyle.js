import styles from '../App/styles';

const { colors } = styles;

export default {
  truncate: {
    show: {
      textDecoration: 'underline',
      display: 'inline',
      ':link': {
        color: colors.pomegranate,
      },
      ':visited': {
        color: colors.pomegranate,
      },
      ':hover': {
        color: colors.mardiGras,
      },
      ':active': {
        color: colors.pomegranate,
      },
      func: (id, evt) => {
        console.dir(evt.target);
        const trunc = evt.target.parentNode;
        const full = document.getElementById(`full-${id}`);
        trunc.hidden = true;
        full.hidden = false;
      },
    },
    hide: {
      textDecoration: 'underline',
      display: 'inline',
      ':link': {
        color: colors.pomegranate,
      },
      ':hover': {
        color: colors.mardiGras,
      },
      ':active': {
        color: colors.pomegranate,
      },
      func: (id, evt) => {
        const full = evt.target.parentNode;
        const trunc = document.getElementById(`truncate-${id}`);
        full.hidden = true;
        trunc.hidden = false;
      },
    },
  },
  classLessons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '0 5%',
  },
  card: {
    width: '22%',
    height: '45vh',
    margin: '2% 1%',
    border: '3px solid black',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3%',
  },
  h4: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  topInfo: {
    width: '100%',
    borderBottom: `1px solid ${colors.pomegranate}`,
    marginBottom: '3%',
  },
  viewLesson: {
    position: 'relative',
    width: '100%',
    height: '15%',
    background: colors.mardiGras,
    opacity: 0.5,
    textAlign: 'center',
    bottom: 0,
    color: colors.white,
    fontSize: '1.5em',
    paddingTop: '2%',
    textDecoration: 'none',
  },
};
