import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

const LessonButton = ({ currentLocation, currentClassId, router }) => {
  const buttonClick = () => {
    router.push(`${currentLocation}/lesson/${currentClassId}`);
  };

  return (
    <div>
      <button onClick={buttonClick}>
        CREATE LESSON
      </button>
    </div>
  );
};

LessonButton.propTypes = {
  currentLocation: PropTypes.string,
  currentClassId: PropTypes.number,
  router: PropTypes.object.isRequired,
};

LessonButton.defaultProps = {
  currentLocation: '',
  currentClassId: null,
};

export default withRouter(LessonButton);
