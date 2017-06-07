import style from '../../containers/App/styles';

const { colors } = style;

export default {
  directoryPlusEditor: {
    display: 'flex',
    height: '100%',
    width: '60vw',
  },
  treeNodeContainer: {
    width: '25%',
    height: '100%',
    padding: '1%',
    display: 'flex',
    flexDirection: 'column',
    color: colors.white,
    backgroundColor: colors.mardiGras,
  },
  h3: {
    height: '15%',
    font: '1.5em Muli-bold, san-serif',
  },
};
