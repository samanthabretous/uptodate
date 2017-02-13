import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { StudentOrTeacher } from '../index';

const mapStateToProps = state => ({
  isOpen: state.login.openStudentTeacherModal,
  username: state.login.username,
});

const StudentTeacherModal = props => (
  <Modal
    isOpen={props.isOpen}
    contentLabel="Student or Teacher Modal"
  >
    <h2>{`Welcome, ${props.username}`}</h2>
    <StudentOrTeacher />
  </Modal>
);

StudentTeacherModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  username: PropTypes.string,
};

StudentTeacherModal.defaultProps = {
  username: '',
};

export default connect(mapStateToProps)(StudentTeacherModal);

