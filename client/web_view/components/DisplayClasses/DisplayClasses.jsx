import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { updateTitlebarInfoAsync } from '../../../redux/titlebar';
import style from './DisplayClassesStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateTitlebarInfoAsync,
  }, dispatch)
);
const mapStateToProps = state => ({
  classes: state.titlebar.classes,
  currentClass: state.titlebar.currentClass,
});

const DisplayClasses = ({ classes, currentClass, router, userId, updateTitlebarInfoAsync }) => {
  const goToNextClass = (enrollmentCode) => {
    updateTitlebarInfoAsync(enrollmentCode, userId);
    router.push(`/dashboard/${userId}/${enrollmentCode}`);
  };

  return (
    <div style={style.displayClasses}>
      <ul>
        <li>{currentClass.enrollmentCode}</li>
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
  currentClass: PropTypes.string,
  userId: PropTypes.string,
  updateTitlebarInfoAsync: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

DisplayClasses.defaultProps = {
  classes: null,
  currentClass: '',
  userId: null,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DisplayClasses));
