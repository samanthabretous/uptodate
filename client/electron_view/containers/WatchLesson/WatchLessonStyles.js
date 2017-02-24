import s from '../App/styles';

export default {
  lesson: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  titlebar: {
    borderBottom: `1px solid ${s.colors.mardiGras}`,
    font: '1rem Muli-bold, san-serif',
    color: s.colors.pomegranate,
    padding: '5px 15px 0 15px',
    display: 'flex',
    flex: '0 0 50px',
    justifyContent: 'space-between',
  },
  watchLesson: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1 0 0',
  },
  main: {
    width: '100%',
    flex: '1 0 0',
    padding: '5%',
  },
  selectLesson: {
    width: '100%',
    height: '35vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  or: {
    font: '2em Muli-bold, san-serif',
    color: s.colors.mardiGras,
  },
  createLesson: {
    background: s.colors.mardiGras,
    width: '100%',
    height: 65,
    font: '1.6em Muli-bold, san-serif',
    color: s.colors.white,
  },
  lessonButtonsContainer: {
    display: 'flex',
    flex: '0 0 60px',
    width: '100%',
  },
  lessonButtons: {
    width: '50%',
    font: '1.6em Muli-bold, san-serif',
    color: s.colors.mardiGras,
    padding: 5,
  },
  watchInfo: {
    height: '25vh',
    width: '100%',
    font: '1.6em Muli-bold, san-serif',
    textAlign: 'center',
    marginTop: '10%',
  },
  span: {
    font: '1em Muli-light, san-serif',
  },
  start: {
    background: s.colors.grannyApple,
  },
  stop: {
    background: s.colors.pomegranate,
  },
};
