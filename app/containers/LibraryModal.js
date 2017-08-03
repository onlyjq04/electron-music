import React from 'react';
import ModalTemplate from '../components/ModalTemplate';
import PropTypes from 'prop-types';

const library = require('../model/library');
const dialog = require('electron').remote.dialog;

class LibraryModal extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Libraries:';
    this.state = {
      content: null,
      isOpened: this.props.isOpened
    };
  }

  componentWillMount() {
    let content = this.constructContent();
    this.props.onRef(this);
    this.setState({
      content: content
    });
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpened !== this.state.isOpened) {
      this.setState({
        isOpened: nextProps.isOpened
      });
    }
  }

  constructContent() {
    return library.listLibraryPath().map((lib, i) => {
      return (
        <li className="inline-list" key={i}>
          <i className="fa fa-times modal-ele-ctrl" onClick={this.deleteLib(lib).bind(this)} />
          <span className="modal-ele">
            {lib}
          </span>
        </li>
      );
    });
  }

  addToLib() {
    let self = this;
    return function() {
      dialog.showOpenDialog(
        {
          buttonLabel: 'Add',
          properties: ['openDirectory', 'multiSelections', 'createDirectory']
        },
        function(filePath) {
          if (filePath && filePath.length > 0) {
            library.addLibraryPath(filePath[0]);
            self.setState({
              content: self.constructContent()
            });
          }
        }
      );
    };
  }

  deleteLib(dir) {
    let self = this;
    return function() {
      library.deleteLibraryPath(dir);
      self.setState({
        content: self.constructContent()
      });
    };
  }

  toggle() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  render() {
    return (
      <div>
        {this.state.isOpened
          ? <ModalTemplate title={this.title} closeCtrl={this.toggle.bind(this)}>
              <ul>
                {this.state.content}
              </ul>
              <button onClick={this.addToLib().bind(this)}>Add</button>
            </ModalTemplate>
          : null}
      </div>
    );
  }
}

LibraryModal.PropTypes = {
  onRef: PropTypes.func.isRequired
};

export default LibraryModal;
