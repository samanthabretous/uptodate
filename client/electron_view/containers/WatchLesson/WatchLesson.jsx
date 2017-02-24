import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { LessonDropDown } from '../../components';
import fileWatcher from '../../utils/fileWatcher';
import style from './WatchLessonStyles';
import { socket } from '../../socket/socket';
import { isMakeLessonVisibleAction } from '../../../redux/lesson';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    isMakeLessonVisibleAction,
  }, dispatch)
);


const mapStateToProps = state => ({
  folderPath: state.lesson.folderPath,
  firstName: state.classes.firstName,
  classname: state.lesson.classname || state.classes.currentClass.name,
  lessonId: state.lesson.lessonId,
  lessonname: state.lesson.lessonname,
  classCode: state.lesson.classCode || state.classes.currentClass.enrollmentCode,
  isMakeLessonVisible: state.lesson.isMakeLessonVisible,
  // indicates previous directory has been watched before
  isfileWatchedBefore: state.lesson.isfileWatchedBefore,
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
    const { router, classCode, params: { userId } } = this.props;
    router.push(`${userId}/${classCode}/make-lesson`);
  }

  render() {
    const { folderPath } = this.props;
    const { isWatchingFiles } = this.state;
    return (
      <div style={style.lesson}>
        <div style={style.watchLesson}>
          <div style={style.main}>
            <div style={style.selectLesson}>
              <LessonDropDown />
              <h3 style={style.or}>OR</h3>
              <button
                style={style.createLesson}
                onClick={this.showMakeLessonForm}
              >Create New Lesson</button>
            </div>
            <div style={style.watchInfo}>
              {folderPath
              ? <div>
                  <p>You are watching folder:</p>
                  <div style={style.span}>
                    <h5>{folderPath}</h5>
                  </div>
                </div>
              : <div><p>You are not watching any files</p>
                <p>Drop Folder to start watching</p></div>
              }
            </div>
          </div>
          <div style={style.lessonButtonsContainer}>
            <button
              style={[style.lessonButtons, style.start]}
              onClick={this.startWatchingFiles}
              disabled={isWatchingFiles || this.readyToStartLesson()}
            >Start Watching</button>
            <button
              style={[style.lessonButtons, style.stop]}
              onClick={this.stopWatchingFiles}
              disabled={!isWatchingFiles}
            >Stop Watching</button>
          </div>
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
};

WatchLesson.defaultProps = {
  folderPath: '',
  classname: '',
  lessonId: '',
  lessonname: '',
  classCode: '',
  children: null,
  isfileWatchedBefore: false,
  firstName: '',
};

WatchLesson = Radium(WatchLesson);

export default connect(mapStateToProps, mapDispatchToProps)(WatchLesson);
