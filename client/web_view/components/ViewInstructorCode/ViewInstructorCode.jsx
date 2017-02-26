import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import { TreeNode, TextEditor } from '../../components/index';
import { getInstructorCode } from '../../../redux/lesson';
import { socket } from '../../socket/socket';
import style from './ViewInstructorCodeStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getInstructorCode,
  }, dispatch)
);

const mapStateToProps = (state, ownprops) => ({
  className: state.titlebar.currentClass && state.titlebar.currentClass.name || '',
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
        language: '',
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
        const fileType = subPath.split('.')[1];
        let language = null;
        Promise.resolve(fileType)
        .then(() => {
          switch (fileType) {
            case 'js':
              language = 'javascript';
              break;
            case 'css':
              language = 'text/css';
              break;
            case 'html':
              language = 'xml';
              break;
            default:
              language = fileType;
              break;
          }
        })
        .then(() => {
          this.props.getInstructorCode(data, language);
        });
      }
    });

    socket.on('updated-directory', (repo) => {
      this.setState({ directory: Object.assign({}, this.state.directory, { childNodes: repo }) });
    });
  }

  render() {
    return (
      <div style={style.directoryPlusEditor}>
        <TreeNode node={this.state.directory} />
        <TextEditor language={this.state.language} />
      </div>
    );
  }
}
ViewInstructorCode.propTypes = {
  lessonId: PropTypes.string.isRequired,
  lessonName: PropTypes.string.isRequired,
  className: PropTypes.string,
  currentPath: PropTypes.string,
  getInstructorCode: PropTypes.func.isRequired,
};

ViewInstructorCode.defaultProps = {
  className: '',
  lessonName: '',
  currentPath: '',
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewInstructorCode));
