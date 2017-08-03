require('./modalTemplate.scss');

import React from 'react';
import PropTypes from 'prop-types';

function ModalTemplate(props) {
  return (
    <div className="modal-show">
      <div className="modal-content">
        <i className="fa fa-times-circle-o close-modal-btn" onClick={props.closeCtrl} aria-hidden="true" />
        <h2>
          {props.title}
        </h2>
        <hr/>
        {props.children}
      </div>
    </div>
  );
}

ModalTemplate.propTypes = {
  closeCtrl: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalTemplate;
