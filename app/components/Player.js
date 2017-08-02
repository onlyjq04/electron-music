require('./player.scss');

import React from 'react';

function ProgressBar(props) {
  return (
    <div className="meter">
      <span />
    </div>
  );
}

function CtrlButton(props) {
  const icons = {
    play: <i className="fa fa-play fa-2x" aria-hidden="true" />,
    pause: <i className="fa fa-pause fa-2x" aria-hidden="true" />,
    stepForward: <i className="fa fa-step-forward fa-2x" aria-hidden="true" />,
    stepBackward: <i className="fa fa-step-backward fa-2x" aria-hidden="true" />
  };
  return (
    <button className="ctrl-btn" onClick={props.onClick}>
      {icons[props.btnType]}
    </button>
  );
}

function Player(props) {
  return (
    <div className="player">
      <ProgressBar />
      <CtrlButton btnType={props.playerStatus} onClick={props.playOnClick} />
    </div>
  );
}

export default Player;
