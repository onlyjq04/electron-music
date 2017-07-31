import React from 'react';

class TopBar extends React.Components {
  constructor(props) {
    super(props);
    this.library = this.props.library;
  }

  render() {
    return (
      <div className="fixed-top">
        <span>
          Library Location: {this.library.path}
        </span>
        <span className="mp-search-bar">
          <Search list={this.library.list} />
        </span>
      </div>
    );
  }
}
