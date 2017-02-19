import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';

const AssignmentButton = ({ currentLocation, currentClassId, router }) => {
  const buttonClick = () => {
    router.push(`${currentLocation}/assignment/${currentClassId}`);
  };

  const goToAssignments = () => {
    router.push('dashboard/:user/:currentClassCode/assignment/:classId/showAll');
  };

  return (
    <div>
      <button onClick={goToAssignments}><h4>ASSIGNMENT</h4></button>
      <button onClick={buttonClick}>
        <FontAwesome
          name="plus"
          size="2x"
        />
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
