import React from 'react';

function ModalTemplate(props) {
  let contentList = props.content || [];
  let contentElements = contentList.map((item, index) => {
    return (
      <ul key={index}>
        {item}
      </ul>
    );
  });

  return (
    <div className="modal-show">
      <div className="modal-content">
        <i className="fa fa-times close-modal-btn" aria-hidden="true" />
        <h2>
          {props.title}
        </h2>
        <li className="inline-list">
          {contentElements}
        </li>
        <div>
          {props.controls}
        </div>
      </div>
    </div>
  );
}

export default ModalTemplate;
