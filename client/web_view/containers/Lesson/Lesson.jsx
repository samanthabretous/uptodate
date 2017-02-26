import React, { PropTypes } from 'react';
import { DiscussionChat, ViewInstructorCode, Votes } from '../../components';
import style from './LessonStyles';

const Lesson = (props) => {
  const { lessonId, user, lesson } = props.params;
  return (
    <div style={style.lesson}>
      <div style={style.directoryAndEditor}>
        <ViewInstructorCode />
      </div>
      <div>
        <Votes userId={user} lessonId={lessonId} lessonname={lesson} />
        <DiscussionChat lessonId={lessonId} />
      </div>
    </div>
  );
};

Lesson.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Lesson;
