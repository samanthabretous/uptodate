import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router';
import style from './ModalStyles';

const Modal = ({ children, router }) => (
  <div>
    <div style={style.modal}>
      <button style={style.back} onClick={router.goBack}>
        <FontAwesome
          name="times"
          size="3x"
          style={style.x}
        />
      </button>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  router: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Modal);
