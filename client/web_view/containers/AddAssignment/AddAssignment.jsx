import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FileInput from 'react-file-input';
import { AsyncPostAssignment } from '../../../redux/assignment';


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncPostAssignment,
  }, dispatch)
);

const mapStateToProps = state => ({
  classId: state.titlebar.currentClass.id,
  classLessons: state.lesson.classLessons,
});

class AddAssignment extends Component {
  constructor(props) {
    super();
    this.state = {
      lessonId: null,
      classId: props.classId,
      due: '',
      instructions: '',
      exercises: '',
      file: null,
    };
    this.buildLessonList = this.buildLessonList.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.submit = this.submit.bind(this);
    this.fileExist = this.fileExist.bind(this);
  }

  buildLessonList() {
    const { classLessons } = this.props;
    let lessonOptions;
    if (classLessons) {
      lessonOptions = classLessons.map((ele, idx) =>
        <option value={ele.id} key={idx}>
          { ele.name }
        </option>);
    }
    return lessonOptions;
  }

  notFileEvent(e) {
    return e.target.name !== 'file';
  }

  handelChange(e) {
    if (this.notFileEvent(e)) {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      this.setState({ file: e.target.files[0] });
    }
  }

  fileExist() {
    return this.state.file;
  }

  submit(e) {
    e.preventDefault();
    // push data into FormData because files must be sent in FormData
    const { lessonId, classId, due, instructions, exercises, file } = this.state;
    const data = new FormData();
    if (this.fileExist()) {
      data.append('file', file, file.name);
    }
    data.append('lessonId', lessonId);
    data.append('classId', classId);
    data.append('due', due);
    data.append('instructions', instructions);
    data.append('exercises', exercises);
    this.props.AsyncPostAssignment(data);

    const { user, currentClassCode } = this.props.params;
    this.props.router.push(`/dashboard/${user}/${currentClassCode}/assignment/${this.props.classId}/showAll`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <select
            onChange={this.handelChange}
            name="lessonId"
          >
            <option value={null}>
              General Class Assignment
            </option>
            {this.buildLessonList()}
          </select>
          <input
            type="date"
            onChange={this.handelChange}
            name="due"
          />
          <input
            type="text"
            placeholder="instructions"
            onChange={this.handelChange}
            name="instructions"
          />
          <input
            type="text"
            placeholder="exercise"
            onChange={this.handelChange}
            name="exercises"
          />
          <FileInput
            name="file"
            accept=".zip"
            placeholder="zip file"
            className="inputClass"
            onChange={this.handelChange}
          />
          <button>create Assignment</button>
        </form>
      </div>
    );
  }
}

AddAssignment.propTypes = {
  classId: PropTypes.number,
  classLessons: PropTypes.array,
  AsyncPostAssignment: PropTypes.func.isRequired,
};

AddAssignment.defaultProps = {
  classId: null,
  classLessons: [],
};


export default connect(mapStateToProps, mapDispatchToProps)(AddAssignment);
