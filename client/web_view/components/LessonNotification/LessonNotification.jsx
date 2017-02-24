import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import style from './LessonNotificationStyles';

const LessonNotification = ({ lessonname, lessonId, instructor, router, userId, classCode }) => {
  const goToLesson = () => {
    router.push(`/dashboard/${userId}/${classCode}/${lessonId}/${lessonname}/none`);
  };
  return (
    <div style={style.box} onClick={goToLesson}>
      <h3>{instructor} has started a {lessonname}</h3>
    </div>
  );
};

LessonNotification.propTypes = {
  lessonname: PropTypes.string.isRequired,
  lessonId: PropTypes.number.isRequired,
  instructor: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  classCode: PropTypes.string.isRequired,
};

export default withRouter(LessonNotification);
