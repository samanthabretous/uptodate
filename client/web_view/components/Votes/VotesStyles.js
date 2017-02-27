import styles from '../../containers/App/styles';

const { colors } = styles;

export default {
  vote: {
    background: colors.white,
    border: `5px solid ${colors.lusty}`,
    color: colors.mardiGras,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '5%',
    height: '50%',
  },
  h3: {
    height: '20%',
    color: colors.white,
    textAlign: 'center',
    background: colors.mardiGras,
    font: '2em Muli-extra-light, san-serif',
    padding: '2%',
  },
  voteContainer: {
    overflow: 'scroll',
    height: '70%',
  },
  topicContainer: {
    display: 'flex',
    padding: '3%',
    borderBottom: `3px solid ${colors.mardiGras}`,
  },
  topic: {
    font: '1.5em Muli-light, san-serif',
    width: '70%',
    wordWrap: 'break',
  },
  numberOfVotes: {
    font: '1.5em Muli-light, san-serif',
  },
  voteButtons: {
    display: 'flex',
  },
  up: {
    color: colors.grannyApple,
  },
  down: {
    color: colors.pomegranate,
  },
  addTopicContainer: {
    display: 'flex',
    height: '15%',
    color: colors.mardiGras,
  },
  input: {
    font: '1.5em Muli-bold, san-serif',
    width: '80%',
  },
  add: {
    font: '1.5em Muli-bold, san-serif',
    background: colors.grannyApple,
    width: '20%',
  },
};
