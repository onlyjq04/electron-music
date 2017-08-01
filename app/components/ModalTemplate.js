import React from 'react';

/**
 * 
 */
class ModalTemplate extends React.Component {
  constructor(props) {
    super(props);
    let contentList = this.props.content || [];
    console.log(contentList)
    this.contentElements = contentList.map((item, index) => {
      return (
        <ul key={index}>
          {item}
        </ul>
      );
    });
  }

  render() {
    return (
      <div className="modal-show">
        <div className="modal-content">
          <i className="fa fa-times close-modal-btn" aria-hidden="true" />
          <h2>
            {this.props.title}
          </h2>
          <li className="inline-list">
            {this.contentElements}
          </li>
          <div>{this.props.controls}</div>
        </div>
      </div>
    );
  }
}

export default ModalTemplate;
