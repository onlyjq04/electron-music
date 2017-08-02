import React from 'react';

function PlayButton(props) {
  let icon =
    props.status !== 'play'
      ? <i className="fa fa-play-circle fa-4x" aria-hidden="true" />
      : <i className="fa fa-pause-circle fa-4x" aria-hidden="true" />;
  return (
    <div>
      <button onClick={props.handleOnClick.bind(this)}>
        {icon}
      </button>
    </div>
  );
}

export default PlayButton;
