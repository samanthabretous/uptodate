import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import style from './VotesStyles';
import { socket } from '../../socket/socket';
import { getVotesAsync, allVotes } from '../../../redux/votes';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getVotesAsync,
    allVotes,
  }, dispatch)
);

const mapStateToProps = state => ({
  lessonVotes: state.votes.lessonVotes,
});

class Votes extends Component {
  constructor() {
    super();
    this.state = {
      topicInput: '',
    };
    this.handleTopicInput = this.handleTopicInput.bind(this);
    this.addTopic = this.addTopic.bind(this);
    this.increaseVote = this.increaseVote.bind(this);
    this.decreaseVote = this.decreaseVote.bind(this);
  }

  componentDidMount() {
    const { getVotesAsync, lessonId, allVotes, userId } = this.props;
    getVotesAsync(lessonId, userId);
    socket.on('update-votes', ({ votes, lesson }) => {
      // url location must match the lesson votes inorder to update votes
      if (lessonId === lesson) allVotes(votes);
    });
  }

  handleTopicInput(e) {
    this.setState({ topicInput: e.target.value });
  }

  addTopic() {
    const { topicInput } = this.state;
    const { lessonId, userId } = this.props;
    socket.emit('create-vote', { topic: topicInput, lessonId, userId });
  }
  increaseVote(voteId) {
    const { lessonId } = this.props;
    socket.emit('increase-vote', { voteId, lessonId });
  }

  decreaseVote(voteId) {
    const { lessonId } = this.props;
    socket.emit('decrease-vote', { voteId, lessonId });
  }

  render() {
    const { lessonVotes } = this.props;
    return (
      <div style={style.voteContainer}>
        <div>
          {lessonVotes && _.map(lessonVotes, vote => (
            <div key={vote.id}>
              <p>{vote.topic}</p>
              <p>{vote.numberOfVotes}</p>
              <div>
                <button
                  onClick={() => this.increaseVote(vote.id)}
                >
                  <FontAwesome
                    name="arrow-up"
                    size="2x"
                  />
                </button>
                <button
                  onClick={() => this.decreaseVote(vote.id)}
                >
                  <FontAwesome
                    name="arrow-down"
                    size="2x"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <input
          type="text"
          onChange={this.handleTopicInput}
        />
        <button onClick={this.addTopic}>Add Topic</button>
      </div>
    );
  }
}

Votes.propTypes = {
  getVotesAsync: PropTypes.func.isRequired,
  allVotes: PropTypes.func.isRequired,
  lessonId: PropTypes.string.isRequired,
  lessonVotes: PropTypes.array,
  userId: PropTypes.string.isRequired,
};

Votes.defaultProps = {
  lessonVotes: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
