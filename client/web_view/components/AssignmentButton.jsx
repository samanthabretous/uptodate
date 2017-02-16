import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

const AssignmentButton = ({ currentLocation, currentClassId, router }) => {
  const buttonClick = () => {
    router.push(`${currentLocation}/assignment/${currentClassId}`);
  };

  return (
    <div>
      <button onClick={buttonClick}>
        ADD ASSIGNMENT
      </button>
    </div>
  );
};

AssignmentButton.propTypes = {
  currentLocation: PropTypes.string,
  currentClassId: PropTypes.number,
  router: PropTypes.object.isRequired,
};

AssignmentButton.defaultProps = {
  currentLocation: '',
  currentClassId: null,
};

export default withRouter(AssignmentButton);
