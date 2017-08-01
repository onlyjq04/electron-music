import React from 'react';
import LibraryModal from './LibraryModal';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLibraryModal: false
    };
  }

  onLibrarySettings(e) {
    e.preventDefault();
    this.setState({
      showLibraryModal: !this.state.showLibraryModal
    });
  }

  render() {
    return (
      <div className="fixed-top">
        <span>
          <button onClick={this.onLibrarySettings.bind(this)}>Library Settings</button>
        </span>
        <LibraryModal show={this.state.showLibraryModal} />
      </div>
    );
  }
}

export default TopBar;
