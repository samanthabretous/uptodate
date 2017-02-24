import Roboto_Thin from '../../fonts/Roboto/Roboto-ThinItalic.ttf';

export default {
  overAllRules: {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
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
    fontFamily: Roboto_Thin,
    fontSize: '1.5em',
  },
  ul: {
    listStyle: 'none',
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
