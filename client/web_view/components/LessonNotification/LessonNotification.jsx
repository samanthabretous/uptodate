import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import style from './LessonNotificationStyles';

const LessonNotification = ({ lessonname, lessonId, instructor, router }) => {
  const goToLesson = () => {
    router.push(lessonId);
  };
  return (
    <div style={style.box} onClick={goToLesson}>
      <h3>{instructor} has started a {lessonname}</h3>
    </div>
  );
};

LessonNotification.propTypes = {
  lessonname: PropTypes.string.isRequired,
  lessonId: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
};

export default withRouter(LessonNotification);
