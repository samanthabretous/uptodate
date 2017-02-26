import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import style from './ModalStyles';

const Modal = ({ children, router }) => (
  <div>
    <div style={style.modal}>
      <p><button onClick={router.goBack}>Back</button></p>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  router: PropTypes.object.isRequired,
};

export default withRouter(Modal);
