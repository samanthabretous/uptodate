import s from '../../containers/App/styles';

export default {
  dropDown: {
    border: `3px solid ${s.colors.mardiGras}`,
    height: 60,
    width: '100%',
  },
  select: {
    borderStyle: 'none',
    background: 'none',
    font: '1.6em Muli-bold, san-serif',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    ':focus': {
      outline: 'none',
    },
  },
};
