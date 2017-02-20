import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import style from './TitlebarStyles';
import { AssignmentButton, DisplayClasses, LessonButton } from '../';
import { isShowAllClassesAction } from '../../../redux/titlebar';
import { socket } from '../../socket/socket';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    isShowAllClassesAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  userInfo: state.titlebar.userInfo,
  currentClass: state.titlebar.currentClass,
  isShowAllClasses: state.titlebar.isShowAllClasses,
});

class Titlebar extends Component {
  constructor() {
    super();
    this.showAllClasses = this.showAllClasses.bind(this);
  }

  componentDidMount() {
    // add user to socket room to recieve all updates about class while in the class view
    socket.emit('join-classroom', JSON.parse(localStorage.classCode));
  }
  showAllClasses() {
    this.props.isShowAllClassesAction(!this.props.isShowAllClasses);
  }

  render() {
    const { userInfo, currentClass, router, params, isShowAllClasses } = this.props;
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
              <div>
                <h2 style={style.className}>{currentClass.name}</h2>
                <button onClick={this.showAllClasses}>
                  <FontAwesome
                    name="chevron-down"
                    size="2x"
                  />
                </button>
                {isShowAllClasses &&
                  <DisplayClasses
                    userId={params.user}
                  />
                }
              </div>
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
  classes: PropTypes.arrayOf(PropTypes.object),
  isShowAllClasses: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
};

Titlebar.defaultProps = {
  userInfo: null,
  currentClass: null,
  classes: null,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Titlebar));
