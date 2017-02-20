import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';

const AssignmentButton = ({ currentLocation, currentClassId, router }) => {
  const buttonClick = () => {
    let goTo = currentLocation.split('/');
    goTo = goTo.slice(1, 4).join('/');
    router.push(`/${goTo}/assignment/${currentClassId}`);
  };

  const goToAssignments = () => {
    let goTo = currentLocation.split('/');
    goTo = goTo.slice(1, 4).join('/');
    router.push(`/${goTo}/assignment/${currentClassId}/showAll`);
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
