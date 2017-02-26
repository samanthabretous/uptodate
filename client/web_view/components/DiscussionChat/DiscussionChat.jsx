import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { socket } from '../../socket/socket';
import { AsyncGetDiscussion, addMessageAction } from '../../../redux/discussion';
import style from './DiscussionChatStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncGetDiscussion,
    addMessageAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  chatMessages: state.discussion.chatMessages,
});

class DiscussionChat extends Component {
  constructor() {
    super();
    this.state = {
      messageInput: '',
    };
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    const { lessonId, AsyncGetDiscussion, addMessageAction } = this.props;
    // send ajax call to get all lessons
    AsyncGetDiscussion(lessonId);
    // if user is on the same lesson as the message sent over add to chatMessages in the store
    socket.on('message-added', (message) => {
      if (lessonId == message.lessonId) {
        addMessageAction(message);
      }
    });
  }

  handleMessageInput(e) {
    this.setState({ messageInput: e.target.value });
  }

  sendMessage() {
    const { messageInput } = this.state;
    const { lessonId } = this.props;
    socket.emit('add-message', {
      comment: messageInput,
      userId: 1,
      lessonId,
    });
  }

  render() {
    const { chatMessages } = this.props;
    return (
      <div style={style.discussion}>
        <ul style={style.ul}>
          {chatMessages && _.map(chatMessages, message => (
            <li style={style.li} key={message.id}>
              <p><span>{message.user.username}</span>{moment(message.createdAt).format('MMMM Do, h:mm a')}</p>
              <p>{message.comment}</p>
            </li>
          ))}
        </ul>
        <div style={style.chat}>
          <input
            style={style.input}
            type="text"
            onChange={this.handleMessageInput}
            value={this.state.messageInput}
          />
          <button style={style.button} onClick={this.sendMessage}>Send</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionChat);

DiscussionChat.propTypes = {
  chatMessages: PropTypes.array,
  lessonId: PropTypes.string.isRequired,
};

DiscussionChat.defaultProps = {
  chatMessages: null,
};

