import styles from '../../containers/App/styles';

const { colors } = styles;

export default {
  codemirror: {
    '.ReactCodeMirror': {
      height: '100%',
      width: '100%',
      fontSize: '1em',
    },
    '.CodeMirror': {
      height: '100%',
      background: colors.mardiGras,
    },
    '.CodeMirror-gutter': {
      background: '#fff',
    },
  },
  textEditorContainer: {
    width: '80%',
  },
};
