import styles from '../../containers/App/styles';

const { colors } = styles;


export default {
  box: {
    position: 'fixed',
    font: '1.5em Muli-extra-light, san-serif',
    width: '40vw',
    height: 100,
    right: 50,
    bottom: -100,
    zIndex: 1000,
    margin: 0,
    color: colors.white,
    background: colors.pomegranate,
    border: `5px solid ${colors.mardiGras}`,
    transition: 'bottom 500ms',
  },
  showBox: {
    bottom: 0,
  },
};
