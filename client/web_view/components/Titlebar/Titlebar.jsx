import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './TitlebarStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  firstName: state.titlebar.userInfo.firstName,
  id: state.titlebar.id,
  name: state.titlebar.name,
  enrollmentCode: state.titlebar.enrollmentCode,
  numberOfInstructorsInCurrentClass: state.titlebar.numberOfInstructorsInCurrentClass,
  numberOfStudentsInCurrentClass: state.titlebar.numberOfStudentsInCurrentClass,
});

const Titlebar = props =>
  (
    <div style={style.dashbar}>
      { /* first title bar */ }
      <div style={style.firstDashbar}>
        <div>
          <h1 style={style.logo}>Up To Date</h1>
        </div>
        <h2 style={style.firstName}>Hi, {props.firstName}</h2>
      </div>
      { /* second title bar */ }
      <div style={style.secondDashbar}>
        <div style={style.classInfo}>
          <div>
            <h2 style={style.className}>{props.name}</h2>
            <p style={style.enrollmentCode}>enrollment code: {props.enrollmentCode}</p>
          </div>
          <div style={style.classUserInfo}>
            <div style={style.userTotal}>
              <h6 style={style.type}>Students</h6>
              <h3 style={style.amount}>{props.numberOfStudentsInCurrentClass}</h3>
            </div>
            <div style={style.userTotal}>
              <h6 style={style.type}>Instructors</h6>
              <h3 style={style.amount}>{props.numberOfInstructorsInCurrentClass}</h3>
            </div>
            <div>
              <button
                onClick={
                  () => {
                    const curentLocation = props.router.getCurrentLocation().pathname;
                    props.router.push(`${curentLocation}/lesson/${props.id}`);
                  }
                }
              > CREATE LESSON </button>

              <button onClick={()=>{
                const curentLocation = props.router.getCurrentLocation().pathname
                props.router.push(`${curentLocation}/assignment/${props.id}`);
              }}>ADD ASSIGNMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


Titlebar.propTypes = {
  firstName: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  enrollmentCode: PropTypes.string,
  numberOfInstructorsInCurrentClass: PropTypes.number,
  numberOfStudentsInCurrentClass: PropTypes.number,
  router: PropTypes.object.isRequired,
};

Titlebar.defaultProps = {
  firstName: null,
  id: null,
  name: '',
  enrollmentCode: '',
  numberOfInstructorsInCurrentClass: 0,
  numberOfStudentsInCurrentClass: 0,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Titlebar));
