import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DisplayClasses, Lesson, MakeLesson } from '../../components';
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
      isMakeLessonVisible: false,
      isWatchingFiles: false,
    };
    this.startWatchingFiles = this.startWatchingFiles.bind(this);
    this.stopWatchingFiles = this.stopWatchingFiles.bind(this);
    this.readyToStartLesson = this.readyToStartLesson.bind(this);
    this.showMakeLessonForm = this.showMakeLessonForm.bind(this);
  }

  startWatchingFiles(e) {
    e.preventDefault();
    const { folderPath, classname, lessonId } = this.props;
    fileWatcher(folderPath, classname, lessonId);
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

  showMakeLessonForm() {
    this.setState(prevState => ({
      isMakeLessonVisible: !prevState.isMakeLessonVisible,
    }));
  }

  render() {
    const { folderPath } = this.props;
    const { isMakeLessonVisible, isWatchingFiles } = this.state;
    return (
      <div style={style.lesson}>
        <DisplayClasses />
        <div>
          <div>
            <Lesson />
            <button onClick={this.showMakeLessonForm}>
              {isMakeLessonVisible ? 'x' : '+'}
            </button>
          </div>
          {isMakeLessonVisible && <MakeLesson />}
          {folderPath
            ? <p>You are watching folder: {folderPath}</p>
            : <p>You are not watching any files</p>
          }
          <button
            onClick={this.submit}
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

AddLesson.propTypes = {
  folderPath: PropTypes.string,
  classname: PropTypes.string,
  lessonId: PropTypes.string,
};

AddLesson.defaultProps = {
  folderPath: '',
  classname: '',
  lessonId: '',
};

export default connect(mapStateToProps)(AddLesson);
