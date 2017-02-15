import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DisplayClasses, Lesson } from '../../components';
import fileWatcher from '../../utils/fileWatcher';

const mapStateToProps = state => ({
  folderPath: state.lesson.folderPath,
  classname: state.lesson.classname,
  lessonId: state.lesson.lessonId,
});

class AddLesson extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.readyToStartLesson = this.readyToStartLesson.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { folderPath, classname, lessonId } = this.props;
    fileWatcher(folderPath, classname, lessonId);
  }

  readyToStartLesson(){
    // make sure all required info is available before starting lesson
    const { folderPath, classname, lessonId } = this.props;
    return !(folderPath && classname && lessonId);
  }

  render() {
    const { folderPath } = this.props;
    return (
      <div>
        <DisplayClasses />
        <Lesson />
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
