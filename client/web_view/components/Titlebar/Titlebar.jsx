import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import Radium from 'radium';
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
  allUserClasses: state.titlebar.classes,
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
    const classCode = JSON.parse(localStorage.classCode) || this.props.currentClass.enrollmentCode;
    setTimeout(() => {
      socket.emit('join-classroom', this.props.allUserClasses);
    }, 2000);
  }
  showAllClasses() {
    console.log(!this.props.isShowAllClasses);
    this.props.isShowAllClassesAction(!this.props.isShowAllClasses);
  }

  render() {
    const { userInfo, currentClass, router, params: { user }, isShowAllClasses } = this.props;
    return (
      <div style={style.dashbar}>
        { /* first title bar */ }
        <div style={style.firstDashbar}>
          <div style={style.logoContainer}>
            <img style={style.logo} alt="logo" src="/images/logos/logo-horizontal-white.png" />
          </div>
          <h2 style={style.firstName}>Hi, {userInfo.firstName}</h2>
        </div>
        { /* second title bar */ }
        { currentClass &&
        <div style={style.secondDashbar}>
          <div style={style.classInfo}>
            <div style={style.classnameContainer}>
              <h2 style={style.className}>{currentClass.name}</h2>
              <button style={style.chevron} onClick={this.showAllClasses}>
                <FontAwesome
                  name="chevron-down"
                  size="2x"
                />
              </button>
            </div>
            <DisplayClasses
              userId={user}
              animate={isShowAllClasses}
            />
            <div style={style.classUserInfo}>
              <div style={[style.userTotal, style.studentInfo]}>
                <h6 style={style.type}>Students</h6>
                <h3 style={style.amount}>{currentClass.students.length}</h3>
              </div>
              <div style={[style.userTotal, style.instructorInfo]}>
                <h6 style={style.type}>Instructors</h6>
                <h3 style={style.amount}>{currentClass.instructors.length}</h3>
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

Titlebar.propTypes = {
  userInfo: PropTypes.object,
  currentClass: PropTypes.object,
  isShowAllClasses: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
  allUserClasses: PropTypes.arrayOf(PropTypes.object),
  params: PropTypes.object.isRequired,
};

Titlebar.defaultProps = {
  userInfo: null,
  currentClass: null,
  allUserClasses: null,
};

Titlebar = Radium(Titlebar);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Titlebar));
