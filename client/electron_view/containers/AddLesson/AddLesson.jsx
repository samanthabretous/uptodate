import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DisplayClasses, Lesson, MakeLesson } from '../../components';
import fileWatcher from '../../utils/fileWatcher';

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
    };
    this.submit = this.submit.bind(this);
    this.readyToStartLesson = this.readyToStartLesson.bind(this);
    this.showMakeLessonForm = this.showMakeLessonForm.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { folderPath, classname, lessonId } = this.props;
    fileWatcher(folderPath, classname, lessonId);
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
    const { isMakeLessonVisible } = this.state;
    return (
      <div>
        <DisplayClasses />
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
          disabled={this.readyToStartLesson()}
        >
          Start Lesson
        </button>
      </div>
    );
  }
}

AddLesson.propTypes = {
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
