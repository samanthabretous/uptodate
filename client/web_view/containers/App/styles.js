import robotoThin from '../../public/fonts/Roboto/Roboto-ThinItalic.ttf';
import quicksand from '../../public/fonts/Quicksand/Quicksand-Regular.ttf';

export default {
  overAllRules: {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Helvetica',
    },
    button: {
      border: 'none',
      backgroundColor: 'none',
    },
  },
  colors: {
    white: '#ffffff',
    pomegranate: '#EE3233',
    mardiGras: '#331832',
    grannyApple: '#C7EFCF',
    saltpan: '#EEF5DB',
    lusty: '#772E25',
  },
  h1: {
    color: '#EE3233',
    fontFamily: robotoThin,
    fontSize: '1.5em',
  },
  ul: {
    listStyleType: 'none',
    listStyleImage: 'fa fa-angle-right',
    overflow: 'scroll',
  },
  ol: {
    listStyle: 'none',
  },
  // There will be very few reasons to use the li specific styling.
  // In almost all situation you should be using the styling for ul and ol over it.
  li: {
    listStyle: 'none',
  },
  a: {
    ':link': {
      color: '#EE3233',
    },
    ':visited': {
      color: '#EE3233',
    },
    ':hover': {
      color: '#331832',
    },
    ':active': {
      color: '#EE3233',
    },
  },
  button: {
    border: 'none',
    borderRadius: '1vw',
    backgroundColor: '#331832',
    color: '#ffffff',
    fontSize: '1.2em',
    width: '20%',
    height: '8%',
    ':hover': {
      backgroundColor: '#847484',
    },
    ':active': {
      backgroundColor: '#472f46',
    },
  },
};
