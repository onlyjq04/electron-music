import React from 'react';
import playListStore from '../store/playListStore';
import ModalTemplate from '../components/ModalTemplate';

const dialog = require('electron').remote.dialog;

class LibraryModal extends React.Component {
  constructor(props) {
    super(props);
    let self = this;
    this.title = 'Libraries:';
    this.controls = (function() {
      return (
        <div>
          <button onClick={self.addToLib().bind(self)}>Add</button>
        </div>
      );
    })();
    this.state = {
      content: null
    };
  }

  componentDidMount() {
    let content = this.constructContent();
    this.setState({
      content: content
    });
  }

  constructContent() {
    return playListStore.listLibraries().map(lib => {
      return (
        <div>
          <i className="fa fa-times modal-ele-ctrl" onClick={this.deleteLib(lib).bind(this)} />
          <span className="modal-ele">
            {lib}
          </span>
        </div>
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
            playListStore.addToLib(filePath[0]);
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
      playListStore.deleteLibrary(dir);
      self.setState({
        content: self.constructContent()
      });
    };
  }

  render() {
    return (
      <div>
        {this.props.show
          ? <ModalTemplate
              controls={this.controls}
              content={this.state.content}
              title={this.title}
              closeCtrl={this.props.close}
            />
          : null}
      </div>
    );
  }
}

export default LibraryModal;
