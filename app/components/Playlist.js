import React from 'react';
function Playlist(props) {
  let playlist = props.songs.map((song, idx) => {
    return (
      <li key={idx} onClick={props.handleOnClick.bind(this, song.name)}>
        {song.name}
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

export default Playlist;
