import React from 'react';
import LibraryModal from './LibraryModal';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLibraryModal: false
    };
  }

  toggleModal(e) {
    e.preventDefault();
    this.setState({
      showLibraryModal: !this.state.showLibraryModal
    });
  }

  render() {
    return (
      <div>
        <LibraryModal show={this.state.showLibraryModal} close={this.toggleModal.bind(this)} />
        <div className="fixed-top">
          <span className="logo" />
          <div className="menu-click" onClick={this.toggleModal.bind(this)}>
            Libraries
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
