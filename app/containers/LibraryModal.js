import React from 'react';
import playListStore from '../store/playListStore';
import ModalTemplate from '../components/ModalTemplate';

const dialog = require('electron').remote.dialog;

class LibraryModal extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Libraries:';
    this.controls = null;
    this.state = {
      content: null
    };
  }

  componentDidMount() {
    let self = this;
    let content = this.constructContent();
    this.setState({
      content: content
    });
    this.controls = (function() {
      return (
        <div>
          <button onClick={self.addToLib().bind(self)}>Add</button>
        </div>
      );
    })();
  }

  constructContent() {
    return playListStore.listLibraries().map(lib => {
      return (
        <span style={{display: 'inline', paddingRight: '5px'}}>
          {lib}
          <i className="fa fa-times" onClick={this.deleteLib(lib).bind(this)} />
        </span>
      );
    });
  }

  addToLib() {
    return function() {
      dialog.showOpenDialog(
        {
          properties: ['openDirectory', 'multiSelections', 'createDirectory']
        },
        function(filePath) {
          if (filePath.length > 0) {
            playListStore.addToLib(filePath[0]);
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
          ? <ModalTemplate controls={this.controls} content={this.state.content} title={this.title} />
          : <div />}
      </div>
    );
  }
}

export default LibraryModal;
