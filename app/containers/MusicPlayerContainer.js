import React from 'react';

import Playlist from '../components/Playlist';
import PlayButton from '../components/PlayButton';
import playListStore from '../store/playListStore';

class MusicPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      currentState: 'paused'
    };
  }

  componentDidMount() {
    this.setState({
      tracks: playListStore.getTracks()
    });
  }

  _handleItemClick(track) {
    let returnedState;
    playListStore.notifyOnClick(track.title);

    returnedState = playListStore.togglePlay(this.state.currentState, track);

    this.setState({
      currentState: returnedState
    });
  }

  _handleButtonClick() {
    let returnedState;
    returnedState = playListStore.togglePlay(this.state.currentState);
    this.setState({
      currentState: returnedState
    });
  }

  render() {
    // let buttonName = this.state.currentState === 'play' ? 'Pause' : 'Play';

    return (
      <div>
        <div>
          <Playlist tracks={this.state.tracks} handleOnClick={this._handleItemClick.bind(this)} />
          <PlayButton status={this.state.currentState} handleOnClick={this._handleButtonClick.bind(this)} />
        </div>
      </div>
    );
  }
}

export default MusicPlayerContainer;
