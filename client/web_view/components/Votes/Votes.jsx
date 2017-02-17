import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import style from './VotesStyles';
import { socket } from '../../socket/socket';
import { getVotesAsync } from '../../../redux/votes';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getVotesAsync,
  }, dispatch)
);

const mapStateToProps = state => ({
  lessonVotes: state.votes.lessonVotes,
});

class Votes extends Component {
  constructor() {
    super();
    this.increaseVote = this.increaseVote.bind(this);
    this.decreaseVote = this.decreaseVote.bind(this);
  }

  componentDidMount() {
    const { getVotesAsync, lessonParams } = this.props;
    getVotesAsync(lessonParams);
  }

  increaseVote(voteId) {
    socket.emit('increaseVote', voteId)
  }

  decreaseVote() {
    socket.emit('increaseVote', voteId)
  }

  render() {
    const { lessonVotes, lessonParams } = this.props;
  
    return (
      <div style={style.voteContainer}>
        {lessonVotes && _.map(lessonVotes, vote => (
          <div key={vote.id}>
            <p>{vote.topic}</p>
            <p>{vote.numberOfVotes}</p>
            <div>
              <button onClick={() => this.increaseVote(vote.id)}>UP</button>
              <button onClick={() => this.decreaseVote(vote.id)}>DOWN</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Votes.propTypes = {
  getVotesAsync: PropTypes.func.isRequired,
  lessonParams: PropTypes.string.isRequired,
  lessonVotes: PropTypes.array,
};

Votes.defaultProps = {
  lessonVotes: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
