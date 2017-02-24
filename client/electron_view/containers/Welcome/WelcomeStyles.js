import s from '../App/styles';

export default {
  welcome: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: '3px solid red',
  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    border: '3px solid red',
  },
  handImgContainer: {
    width: 100,
    height: 'auto',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  welcomeHeader: {
    font: 'italic 200 5.25em Muli, san-serif',
    margin: 0,
  },
  tagline: {
    fontSize: '1.5rem',
    textAlign: 'center',
    width: '80%',
    border: '3px solid red',
    margin: '0 auto',
  },
  startButton: {
    background: s.colors.teal,
    border: 'none',
    color: s.colors.white,
    fontSize: '2em',
    padding: 15,
    marginTop: '15%',
  },
};
