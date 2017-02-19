import React, { PropTypes } from 'react';
import { DiscussionChat, ViewInstructorCode, Votes } from '../../components';

const Lesson = (props) => {
  const { lessonId } = props.params;
  return (
    <div>
      <ViewInstructorCode />
      <div>
        <Votes lessonId={lessonId} />
        <DiscussionChat lessonId={lessonId} />
      </div>
    </div>
  );
};

Lesson.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Lesson;
