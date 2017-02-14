import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedLessonAction } from '../../../redux/lesson';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectedLessonAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  classLessons: state.lesson.classLessons,
});

const LessonDropDown = props => (
  <div>
    <select onChange={(e) => props.selectedLessonAction(e.target.value)}>
      <option> Select a Previous Lesson</option>
      {props.classLessons && props.classLessons.map(lesson => (
        <option
          key={lesson.id}
          value={lesson.id}
        >
          {lesson.name}
        </option>
      ))}
    </select>
  </div>
);

LessonDropDown.propTypes = {
  classLessons: PropTypes.array,
  selectedLessonAction: PropTypes.func.isRequired,
};

LessonDropDown.defaultProps = {
  classLessons: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonDropDown);
