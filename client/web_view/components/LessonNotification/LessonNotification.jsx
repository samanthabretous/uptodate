import React, { PropTypes } from 'react';
import Radium from 'radium';
import { withRouter } from 'react-router';
import style from './LessonNotificationStyles';

const LessonNotification = ({ lessonname, instructor, isNewLessonStarted, lessonClicked }) => (
  <button style={[style.box, isNewLessonStarted && style.showBox]} onClick={lessonClicked}>
    <h3>{instructor} has started a {lessonname}</h3>
  </button>
);

LessonNotification.propTypes = {
  lessonname: PropTypes.string,
  instructor: PropTypes.string,
  isNewLessonStarted: PropTypes.bool.isRequired,
  lessonClicked: PropTypes.func.isRequired,
};
LessonNotification.defaultProps = {
  lessonname: '',
  instructor: '',
};

export default withRouter(Radium(LessonNotification));
