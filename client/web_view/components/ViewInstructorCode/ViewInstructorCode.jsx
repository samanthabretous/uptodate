import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import { TreeNode, TextEditor } from '../../components/index';
import { AsyncGetInstructorCode } from '../../../redux/lesson';
import { socket } from '../../socket/socket';
import styles from './ViewInstructorCodeStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncGetInstructorCode,
  }, dispatch)
);

const mapStateToProps = (state, ownprops) => ({
  className: state.titlebar.currentClass.name,
  lessonName: ownprops.params.lesson,
  lessonId: ownprops.params.lessonId,
  currentPath: state.lesson.currentPath,
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
    const that = this;
    axios.get(`/api/repoFile/${this.props.lessonId}`)
    .then((data) => {
      that.setState({ directory: Object.assign({}, that.state.directory, { childNodes: data.data }) });
    });
    socket.on('updated-file', ({ subPath, data }) => {
      /*
       * every time a file updates first check if the subpath matches the url params
       */
      if (this.props.currentPath === subPath) {
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
        <div style={styles.treeDiv}>
          <TreeNode node={this.state.directory} />
        </div>
        <div style={styles.codeDiv}>
          <TextEditor />
        </div>
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
