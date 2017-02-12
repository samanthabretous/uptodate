import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import { StudentOrTeacher } from '../index';

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

export default StudentTeacherModal;

