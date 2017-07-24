import React from 'react';
function Playlist(props) {
  let playlist = props.tracks.map((t, idx) => {
    return (
      <li key={idx} onClick={props.handleOnClick.bind(this, t)}>
        {t.title}
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
