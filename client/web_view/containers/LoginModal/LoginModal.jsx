import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import { LoginOrSignUp } from '../index';

const LoginModal = props => (
  <Modal
    isOpen={props.isOpen}
    contentLabel="Login Modal"
  >
    <h1>Login here!</h1>
    <LoginOrSignUp />
  </Modal>
);

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default LoginModal;
