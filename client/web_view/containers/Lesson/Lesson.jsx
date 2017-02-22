import React, { PropTypes } from 'react';
import { DiscussionChat, ViewInstructorCode, Votes } from '../../components';

const Lesson = (props) => {
  const { lessonId, user } = props.params;
  return (
    <div>
      <ViewInstructorCode />
      <div>
        <Votes userId={user} lessonId={lessonId} />
        <DiscussionChat lessonId={lessonId} />
      </div>
    </div>
  );
};

Lesson.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Lesson;
