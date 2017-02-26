import Roboto_Thin from '../../public/fonts/Roboto/Roboto-ThinItalic.ttf';
import style from '../../containers/App/styles';

const { colors } = style;

export default {
  node: {
    font: '1.2em Muli-light, san-serif',
    border: '3px solid green',
  },
  treeDiv: {
    width: '20%',
    height: '100%',
    padding: '1%',
    color: colors.white,
    backgroundColor: colors.lusty, 
  },
  listElements: {
    width: '100px',
    margin: '0px',
    padding: '0px',
    listStyle: 'none',
    lineHeight: '1px',
  },
  h3: {
    font: '1.5em Muli-bold, san-serif',
  },
};
