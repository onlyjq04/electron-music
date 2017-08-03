import React from 'react';
import LibraryModal from './LibraryModal';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLibraryModal: false
    };
  }
  
  onButtonClick() {
    this.libraryModal.toggle();
  }

  render() {
    return (
      <div>
        <LibraryModal isOpened={false} onRef={ref=>(this.libraryModal = ref)}/>
        <div className="fixed-top">
          <span className="logo" />
          <div className="menu-click" onClick={this.onButtonClick.bind(this)}>
            Libraries
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
