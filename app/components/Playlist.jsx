import React from 'react';

class Playlist extends React.Component {
  render() {
    let playlist = this.props.songs.map((pl, idx) => {
      return (
        <li key={idx}>
          {pl.name}
        </li>
      );
    });
    return (
      <div className="side-bar">
        <ul className="list-group">
          {playlist}
        </ul>
      </div>
    );
  }
}

export default Playlist;