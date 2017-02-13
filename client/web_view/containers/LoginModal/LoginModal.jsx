import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { LoginOrSignUp } from '../index';

const mapStateToProps = state => ({
  isOpen: state.login.openLoginModal,
});

const LoginModal = props => (
  <Modal
    isOpen={props.isOpen}
    contentLabel="Login Modal"
  >
    <h1>Login!</h1>
    <LoginOrSignUp />
  </Modal>
);

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(LoginModal);
