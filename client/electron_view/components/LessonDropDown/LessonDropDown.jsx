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

const LessonDropDown = ({ selectedLessonAction, classLessons }) => {
  const handleDropDownSelecton = (e) => {
    const lessonArray = e.target.value.split(',');
    const lessonId = lessonArray[0];
    const lessonname = lessonArray.splice(1).join(',');
    selectedLessonAction(lessonId, lessonname);
  };
  return (
    <div>
      <select onChange={handleDropDownSelecton}>
        <option> Select a Previous Lesson</option>
        {classLessons && classLessons.map(lesson => (
          <option
            key={lesson.id}
            value={[lesson.id, lesson.name]}
          >
            {lesson.name}
          </option>
        ))}
      </select>
    </div>
  );
};

LessonDropDown.propTypes = {
  classLessons: PropTypes.array,
  selectedLessonAction: PropTypes.func.isRequired,
};

LessonDropDown.defaultProps = {
  classLessons: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonDropDown);
