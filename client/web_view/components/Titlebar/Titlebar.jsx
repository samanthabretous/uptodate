import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './TitlebarStyles';
import { AssignmentButton, LessonButton } from '../';
import { socket } from '../../socket/socket';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  userInfo: state.titlebar.userInfo,
  currentClass: state.titlebar.currentClass,
});

class Titlebar extends Component {
  componentDidMount() {
    // add user to socket room to recieve all updates about class while in the class view
    socket.emit('join-classroom', localStorage.classCode);
  }

  render() {
    const { userInfo, currentClass, router } = this.props;
    return (
      <div style={style.dashbar}>
        { /* first title bar */ }
        <div style={style.firstDashbar}>
          <div>
            <h1 style={style.logo}>Up To Date</h1>
          </div>
          <h2 style={style.firstName}>Hi, {userInfo.firstName}</h2>
        </div>
        { /* second title bar */ }
        { currentClass &&
        <div style={style.secondDashbar}>
          <div style={style.classInfo}>
            <div>
              <h2 style={style.className}>{currentClass.name}</h2>
              <p style={style.enrollmentCode}>enrollment code: {currentClass.enrollmentCode}</p>
            </div>
            <div style={style.classUserInfo}>
              <div style={style.userTotal}>
                <h6 style={style.type}>Students</h6>
                <h3 style={style.amount}>{currentClass.students.length}</h3>
              </div>
              <div style={style.userTotal}>
                <h6 style={style.type}>Instructors</h6>
                <h3 style={style.amount}>{currentClass.instructors.length}</h3>
              </div>
              <AssignmentButton
                currentLocation={router.getCurrentLocation().pathname}
                currentClassId={currentClass.id}
              />
              <LessonButton
                currentLocation={router.getCurrentLocation().pathname}
                currentClassId={currentClass.id}
              />
            </div>
          </div>
        </div> }
      </div>
    );
  }
};

Titlebar.propTypes = {
  userInfo: PropTypes.object,
  currentClass: PropTypes.object,
  router: PropTypes.object.isRequired,
};

Titlebar.defaultProps = {
  userInfo: null,
  currentClass: null,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Titlebar));
