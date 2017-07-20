import React from 'react';

function PlayButton(props) {
  let audio = props.audio;
  return (
    <div>
      <button onClick={props.handleOnClick.bind(this, audio)}>
        <i className="fa fa-play-circle"></i>
      </button>
    </div>
  );
}

export default PlayButton;
