import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    <div>
      { /* first title bar */ }
      <div>
        <div> 
          <h1>Up To Date</h1>
        </div>
        <h2>Hi, {props.firstName}</h2>
      </div>
      { /* second title bar */ }
      <div>
        <div>
          <div> 
            <h2>{props.name}</h2>
            <p>{props.enrollmentCode}</p>
          </div>
          <div>
            <div>
              <h6>Students</h6>
              <h3>{props.numberOfStudentsInCurrentClass}</h3>
            </div>
            <div>
              <h6>Instructors</h6>
              <h3>{props.numberOfInstructorsInCurrentClass}</h3>
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
};

Titlebar.defaultProps = {
  firstName: null,
  id: null,
  name: '',
  enrollmentCode: '',
  numberOfInstructorsInCurrentClass: 0,
  numberOfStudentsInCurrentClass: 0,
};


export default connect(mapStateToProps, mapDispatchToProps)(Titlebar);
