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
      <div className="fixed-top">
        <span className="logo"></span>
        <div className="menu-click" onClick={this.toggleModal.bind(this)}>
          Libraries
        </div>
        <LibraryModal show={this.state.showLibraryModal} close={this.toggleModal.bind(this)} />
      </div>
    );
  }
}

export default TopBar;
