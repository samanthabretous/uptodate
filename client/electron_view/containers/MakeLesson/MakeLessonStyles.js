import s from '../App/styles';

export default {
  makeLesson: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  top: {
    font: '1rem Muli-bold, san-serif',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: 50,
    padding: '0 15px',
  },
  close: {
    height: '100%',
    padding: 0,
    font: '2rem Muli-bold, san-serif',
    color: s.colors.mardiGras,
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '50vh',
    width: '80%',
    font: '1rem Muli-bold, san-serif',
    marginTop: 50,
  },
  userInput: {
    border: `3px solid ${s.colors.mardiGras}`,
    font: '1rem Muli-bold, san-serif',
  },
  userTextArea: {
    border: `3px solid ${s.colors.mardiGras}`,
    font: '1rem Muli-bold, san-serif',
  },
  submit: {
    background: s.colors.mardiGras,
    font: '1.6rem Muli-bold, san-serif',
    color: s.colors.white,
    height: 50,
  },
};
