import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AsyncPostLesson } from '../../../redux/lesson';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncPostLesson,
  }, dispatch)
);

const mapStateToProps = state => ({
  classLessons: state.lesson.classLessons || state.classes.currentClass.lessons,
  classId: state.lesson.lessonId || state.classes.currentClass.id,
});

class MakeLesson extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      link: '',
      lecture: '',
      uniqueNameError: false,
    };
    this.createLesson = this.createLesson.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValidForm() {
    const { classLessons } = this.props;
    const { name } = this.state;
    const nameLength = name.length > 0;

    if (!nameLength) return false;

    // make sure lesson name is unqiue based on class
    const islessonNameNotUnique = _.find(classLessons, ['name', name]);
    if (islessonNameNotUnique) {
      this.setState({ uniqueNameError: true });
      return false;
    }
    // lesson name is filled out correctly
    return true;
  }

  createLesson() {
    if (this.isValidForm()) {
      /* send out ajax to create lesson
      * the returned id is use for the file watching
      */
      const { AsyncPostLesson, classId } = this.props;
      AsyncPostLesson({ ...this.state, classId });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Enter name of lecture"
          onChange={this.handleInputs}
        />
        {this.state.uniqueNameError && <span>Please create a unique name</span>}
        <input
          type="text"
          name="link"
          value={this.state.link}
          placeholder="Enter one additional link for lesson"
          onChange={this.handleInputs}
        />
        <textarea
          placeholder="Enter lecture description"
          rows="4" cols="50"
          name="lecture"
          value={this.state.lecture}
          onChange={this.handleInputs}
        />
        <button onClick={this.createLesson}>Submit Lesson Info</button>
      </div>
    );
  }
}

MakeLesson.propTypes = {
  classLessons: PropTypes.arrayOf(PropTypes.object),
  classId: PropTypes.number,
  AsyncPostLesson: PropTypes.func.isRequired,
};

MakeLesson.defaultProps = {
  classLessons: null,
  classId: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeLesson);
