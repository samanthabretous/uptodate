import styles from '../../containers/App/styles';

const { colors } = styles;

export default {
  discussion: {
    height: '48%',
    background: colors.white,
    border: `5px solid ${colors.lusty}`,
    color: colors.mardiGras,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  h3: {
    height: '20%',
    color: colors.white,
    textAlign: 'center',
    background: colors.mardiGras,
    font: '2em Muli-extra-light, san-serif',
    padding: '2%',
  },
  ul: {
    height: '70%',
    border: '1px solid pink',
    overflow: 'scroll',
  },
  li: {
    font: '1em Muli-light, san-serif',
    width: '100%',
    wordWrap: 'break',
    padding: '3%',
    borderBottom: `3px solid ${colors.mardiGras}`,
  },
  username: {
    font: '1em Muli-bold, san-serif',
    color: colors.pomegranate,
    marginRight: 5,
  },
  chat: {
    display: 'flex',
    height: '15%',
    color: colors.mardiGras,
  },
  input: {
    font: '1.5em Muli-bold, san-serif',
    width: '80%',
  },
  button: {
    font: '1.5em Muli-bold, san-serif',
    background: colors.grannyApple,
    width: '20%',
  },
};
