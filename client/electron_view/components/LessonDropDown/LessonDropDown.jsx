import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { selectedLessonAction } from '../../../redux/lesson';
import style from './LessonDropDownStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectedLessonAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  /* lessons are being store in two differnet reducers
  *  the intital state is located in the class reducers
  *  when the user clicks on a different class it is stored in the lesson reducer
  */
  classLessons: state.lesson.classLessons || state.classes.currentClass.lessons,
  lessonId: state.lesson.lessonId,
});

const LessonDropDown = Radium(({ selectedLessonAction, classLessons, lessonId }) => {
  const handleDropDownSelecton = (e) => {
    const target = parseInt(e.target.value);
    // find the lesson associated with the lesson id
    const selectedLesson = _.find(classLessons, ['id', target]);
    const isfileWatchedBefore = selectedLesson.fileWatched !== null;
    selectedLessonAction({
      lessonId: target,
      lessonname: selectedLesson.name,
      folderPath: selectedLesson.fileWatched,
      isfileWatchedBefore,
    });
  };
  return (
    <div style={style.dropDown}>
      <select
        style={style.select}
        onChange={handleDropDownSelecton}
        value={`${lessonId}`}
      >
        <option
          style={style.option}
          value="first"
        > Select a Previous Lesson</option>
        {classLessons && classLessons.map(lesson => (
          <option
            style={style.option}
            key={lesson.id}
            value={`${lesson.id}`}
          >
            {lesson.name}
          </option>
        ))}
      </select>
    </div>
  );
});

LessonDropDown.propTypes = {
  classLessons: PropTypes.arrayOf(PropTypes.object),
  selectedLessonAction: PropTypes.func.isRequired,
  lessonId: PropTypes.number,
};

LessonDropDown.defaultProps = {
  classLessons: null,
  lessonId: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonDropDown);
