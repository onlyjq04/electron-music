import React from 'react';

function PlayButton(props) {
  let icon =
    props.status !== 'play'
      ? <i className="fa fa-play-circle" aria-hidden="true" />
      : <i className="fa fa-pause-circle" aria-hidden="true" />;
  return (
    <div>
      <button onClick={props.handleOnClick.bind(this)}>
        {icon}
      </button>
    </div>
  );
}

export default PlayButton;
