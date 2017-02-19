import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';

const LessonButton = ({ currentLocation, currentClassId, router }) => {
  const buttonClick = () => {
    router.push(`${currentLocation}/lesson/${currentClassId}`);
  };

  const goToLessons = () => {
    router.push('dashboard/:user/:currentClassCode');
  };

  return (
    <div>
      <button onClick={goToLessons}><h4>LESSONS</h4></button>
      <button onClick={buttonClick}>
        <FontAwesome
          name="plus"
          size="2x"
        />
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
