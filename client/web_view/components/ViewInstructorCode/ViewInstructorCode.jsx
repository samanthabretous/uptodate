import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import { TreeNode, TextEditor } from '../../components/index';
import { AsyncGetInstructorCode } from '../../../redux/lesson';
import { socket } from '../../socket/socket';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncGetInstructorCode,
  }, dispatch)
);

const mapStateToProps = (state, ownprops) => ({
  className: state.titlebar.currentClass.name,
  lessonName: ownprops.params.lesson,
  lessonId: ownprops.params.lessonId,
});

class ViewInstructorCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: {
        title: 'lesson',
        childNodes: [],
      },
    };
  }

  componentDidMount() {
    // console.log(this.props.lessonId);
    const that = this;
    axios.get(`/api/repoFile/${this.props.lessonId}`)
    .then((data) => {
      // console.log(data.data);
      that.setState({ directory: Object.assign({}, that.state.directory, { childNodes: data.data }) });
    });
    /*
     * every time you click a directory endpoint the route will change and this component will mount again
     * send an AJAX GET request using the url params to get the file content, send this to state and pull down in text editor
     * set text editor value to code
     */
    socket.on('updated-file', ({ subPath, data }) => {
      /*
       * every time a file updates first check if the subpath matches the url params
       * if it does that means the current file we are looking at is being updated
       * in this case send an AJAX GET request to get the current files content
       * send to the state and pull down in text editor, set value to response
       */
      if (this.props.params.splat === subPath) {
        this.props.AsyncGetInstructorCode(subPath, this.props.className, this.props.lessonName);
      }
    });

    socket.on('updated-directory', (repo) => {
      this.setState({ directory: Object.assign({}, this.state.directory, { childNodes: repo }) });
    });
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <TreeNode node={this.state.directory} />
        <TextEditor />
      </div>
    );
  }
}
ViewInstructorCode.propTypes = {
  params: PropTypes.object.isRequired,
  lessonId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  lessonName: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewInstructorCode));
