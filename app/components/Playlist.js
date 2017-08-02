import React from 'react';
function Playlist(props) {
  let playlist = props.tracks.map((t, idx) => {
    return (
      <div key={idx}>
        <li className="playlist-item" onClick={props.handleOnClick.bind(this, t)}>
          {t.title}
        </li>
      </div>
    );
  });

  return (
    <ol className="playlist">
      {playlist}
    </ol>
  );
}

export default Playlist;
