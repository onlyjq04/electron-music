import React from 'react';
function Playlist(props) {
  let playlist = props.tracks.map((t, idx) => {
    return (
      <tr key={idx} className="playlist-item">
        <td>
          {idx + 1}
        </td>
        <td className="clickable" onClick={props.handleOnClick.bind(this, t)}>
          {t.title}
        </td>
      </tr>
    );
  });

  return (
    <div className="playlist">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Track Name</th>
          </tr>
        </thead>
        <tbody>
          {playlist}
        </tbody>
      </table>
    </div>
  );
}

export default Playlist;
