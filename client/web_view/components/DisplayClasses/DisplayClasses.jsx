import React, { PropTypes } from 'react';
import Radium from 'radium';
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

const DisplayClasses = ({ classes, currentClass, router, userId, animate, updateTitlebarInfoAsync }) => {
  console.log(classes);
  const goToNextClass = (enrollmentCode) => {
    updateTitlebarInfoAsync(enrollmentCode, userId);
    router.push(`/dashboard/${userId}/${enrollmentCode}`);
  };

  return (
    <div style={[style.displayClasses, animate && style.slideIn]}>
      <ul style={style.ul}>
        {classes && _.map(classes, oneClass => (
          <li
            style={style.listItem}
            key={oneClass.id}
            onClick={() => goToNextClass(oneClass.enrollmentCode)}
          >
            <h3>{oneClass.name}</h3>
            <p>enrollment code: {oneClass.enrollmentCode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


DisplayClasses.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object),
  currentClass: PropTypes.objectOf(PropTypes.any),
  userId: PropTypes.string,
  updateTitlebarInfoAsync: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

DisplayClasses.defaultProps = {
  classes: null,
  currentClass: null,
  userId: null,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(DisplayClasses)));
