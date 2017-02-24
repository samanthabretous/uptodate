import s from '../App/styles';

export default {
  main: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  titlebar: {
    borderBottom: `1px solid ${s.colors.mardiGras}`,
    font: '1rem Muli-bold, san-serif',
    color: s.colors.pomegranate,
    padding: '15px 15px 0 15px',
    display: 'flex',
    flex: '0 0 70px',
    justifyContent: 'space-between',
  },
  children: {
    flex: '1 0 0',
  },
};
