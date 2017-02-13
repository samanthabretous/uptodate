import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { StudentOrTeacher } from '../index';

const mapStateToProps = state => ({
  isOpen: state.login.openStudentTeacherModal,
});

const StudentTeacherModal = props => (
  <Modal
    isOpen={props.isOpen}
    contentLabel="Student or Teacher Modal"
  >
    <h1>Are You A Student or Teacher?</h1>
    <StudentOrTeacher />
  </Modal>
);

StudentTeacherModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(StudentTeacherModal);

