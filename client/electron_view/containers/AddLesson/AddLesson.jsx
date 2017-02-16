import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DisplayClasses, Lesson } from '../../components';
import fileWatcher from '../../utils/fileWatcher';
import style from './AddLessonStyles';

const mapStateToProps = state => ({
  folderPath: state.lesson.folderPath,
  classname: state.lesson.classname,
  lessonId: state.lesson.lessonId,
});

class AddLesson extends Component {
  constructor() {
    super();
    this.state = {
      isWatchingFiles: false,
    };
    this.startWatchingFiles = this.startWatchingFiles.bind(this);
    this.stopWatchingFiles = this.stopWatchingFiles.bind(this);
    this.readyToStartLesson = this.readyToStartLesson.bind(this);
  }

  startWatchingFiles(e) {
    e.preventDefault();
    const { folderPath, classname, lessonId } = this.props;
    // fileWatcher(folderPath, classname, lessonId);
    this.setState({ isWatchingFiles: true });
  }
  stopWatchingFiles(e) {
    e.preventDefault();
    this.setState({ isWatchingFiles: false });
  }

  readyToStartLesson() {
    // make sure all required info is available before starting lesson
    const { folderPath, classname, lessonId } = this.props;
    return !(folderPath && classname && lessonId);
  }

  render() {
    const { isWatchingFiles } = this.state;
    return (
      <div style={style.lesson}>
        <DisplayClasses />
        <div>
          <Lesson />
          <button
            onClick={this.startWatchingFiles}
            disabled={isWatchingFiles || this.readyToStartLesson()}
          >
            Start Lesson
          </button>
          <button
            onClick={this.stopWatchingFiles}
            disabled={!isWatchingFiles}
          >
            Stop Lesson
          </button>
        </div>
      </div>
    );
  }
}

AddLesson.proptypes = {
  folderPath: PropTypes.string,
  classname: PropTypes.string,
  lessonId: PropTypes.number,
};

AddLesson.defaultProps = {
  folderPath: null,
  classname: '',
  lessonId: null,
};

export default connect(mapStateToProps)(AddLesson);
