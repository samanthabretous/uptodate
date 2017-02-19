import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { updateTitlebarInfoAsync } from '../../../redux/titlebar';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateTitlebarInfoAsync,
  }, dispatch)
);
const mapStateToProps = state => ({
  classes: state.titlebar.classes,
});

const DisplayClasses = ({ classes, router, userId, updateTitlebarInfoAsync }) => {
  const goToNextClass = (enrollmentCode) => {
    updateTitlebarInfoAsync(enrollmentCode, userId);
    router.push(`/dashboard/${userId}/${enrollmentCode}`);
  };

  return (
    <div>
      <ul>
        {classes && _.map(classes, oneClass => (
          <li
            key={oneClass.id}
            onClick={() => goToNextClass(oneClass.enrollmentCode)}
          >
            <h3>{oneClass.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};


DisplayClasses.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.string,
  updateTitlebarInfoAsync: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

DisplayClasses.defaultProps = {
  classes: null,
  userId: null,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DisplayClasses));
