import Roboto_Thin from '../../fonts/Roboto/Roboto-ThinItalic.ttf';
import styles from '../../containers/App/styles';

export default {
  node: {
    marginTop: '30px',
    fontFamily: Roboto_Thin,
    width: '200px',
    maxWidth: '200px',
    ':hover': {
      backgroundColor: '#0074d9',
    },
  },
  treeDiv: {
    backgroundColor: styles.colors.saltpan,
  },
  listElements: {
    width: '100px',
    margin: '0px',
    padding: '0px',
    // listStyle: 'none',
  },
};
