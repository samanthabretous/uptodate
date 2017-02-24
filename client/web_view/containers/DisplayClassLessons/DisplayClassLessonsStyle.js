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
  schedule: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  accountInfo: {
    color: colors.red,
  },
  discussions: {

  },
  grades: {

  },
  assignments: {

  },

};
