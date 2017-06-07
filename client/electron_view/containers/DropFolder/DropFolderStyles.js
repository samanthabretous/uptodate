import s from '../App/styles';

export default {
  dropFolder: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: '-500',
    top: 0,
    left: 0,
  },
  window: {
    zIndex: 100,
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `15px dashed ${s.colors.grannyApple}`,
  },
  dragOver: {
    width: 500,
    height: 300,
    background: s.colors.mardiGras,
    opacity: '0.9',
    borderRadius: 25,
    padding: 25,
  },
  h3: {
    color: s.colors.white,
    textAlign: 'center',
    font: '60px Muli-bold, san-serif',
  },
};
