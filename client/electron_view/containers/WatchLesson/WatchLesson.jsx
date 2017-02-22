import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { LessonDropDown, MakeLesson } from '../../components';
import fileWatcher from '../../utils/fileWatcher';
import style from './WatchLessonStyles';
import { socket } from '../../socket/socket';
import { bindActionCreators } from 'redux';
import { isMakeLessonVisibleAction } from '../../../redux/lesson';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    isMakeLessonVisibleAction,
  }, dispatch)
);


const mapStateToProps = state => ({
  folderPath: state.lesson.folderPath,
  classname: state.lesson.classname,
  lessonId: state.lesson.lessonId,
  lessonname: state.lesson.lessonname,
  classCode: state.lesson.classCode || state.classes.currentClass.enrollmentCode,
  isMakeLessonVisible: state.lesson.isMakeLessonVisible,
});

class WatchLesson extends Component {
  constructor() {
    super();
    this.state = {
      isWatchingFiles: false,
      stopWatchingFiles: null,
    };
    this.startWatchingFiles = this.startWatchingFiles.bind(this);
    this.stopWatchingFiles = this.stopWatchingFiles.bind(this);
    this.readyToStartLesson = this.readyToStartLesson.bind(this);
    this.showMakeLessonForm = this.showMakeLessonForm.bind(this);
  }

  startWatchingFiles(e) {
    e.preventDefault();
    const { folderPath, classname, lessonId, lessonname, classCode } = this.props;
    const watcher = fileWatcher(folderPath, classname, lessonId, lessonname, classCode);
    Promise.resolve(watcher)
    .then(() => {
      const instructor = JSON.parse(localStorage.userInfo).username;
      socket.emit('start-lesson', { classCode, lessonId, lessonname, instructor });
      this.setState({ isWatchingFiles: true, stopWatchingFiles: watcher });
    });
  }
  stopWatchingFiles(e) {
    e.preventDefault();
    this.state.stopWatchingFiles.close();
    this.setState({ isWatchingFiles: false });
  }

  readyToStartLesson() {
    // make sure all required info is available before starting lesson
    const { folderPath, classname, lessonId } = this.props;
    return !(folderPath && classname && lessonId);
  }

  showMakeLessonForm() {
    // open and close the make lesson form
    this.props.isMakeLessonVisibleAction(!this.props.isMakeLessonVisible);
  }

  render() {
    const { folderPath, isMakeLessonVisible } = this.props;
    const { isWatchingFiles } = this.state;
    return (
      <div className="lesson" style={style.lesson}>
        <div>
          <div>
            <h5>Select a Previous Lesson</h5>
            <LessonDropDown />
            <button onClick={this.showMakeLessonForm}>
              Create New Lesson
            </button>
          </div>
          {isMakeLessonVisible && <MakeLesson />}
          {folderPath
            ? <p>You are watching folder: {folderPath}</p>
            : <p>You are not watching any files</p>
          }
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

WatchLesson.propTypes = {
  folderPath: PropTypes.string,
  classname: PropTypes.string,
  lessonId: PropTypes.number,
  lessonname: PropTypes.string,
  classCode: PropTypes.string,
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  isMakeLessonVisible: PropTypes.bool.isRequired,
  isMakeLessonVisibleAction: PropTypes.func.isRequired,
};

WatchLesson.defaultProps = {
  folderPath: '',
  classname: '',
  lessonId: '',
  lessonname: '',
  classCode: '',
  children: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchLesson);
