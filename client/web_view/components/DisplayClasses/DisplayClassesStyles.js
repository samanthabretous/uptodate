import styles from '../../containers/App/styles';

const { colors } = styles;

export default {
  displayClasses: {
    position: 'absolute',
    zIndex: 1000,
    top: '16vh',
    background: colors.mardiGras,
    width: '30vw',
    height: '30vh',
    padding: '1% 3%',
    overflow: 'scroll',
    color: colors.white,
  },
  ul: {
    height: '100%',
    font: '1.2em Muli-bold, san-serif',
  },
  listItem: {
    borderBottom: `1px solid ${colors.pomegranate}`,
    paddingBottom: '1%',
  },
};
