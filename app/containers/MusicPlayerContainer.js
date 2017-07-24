require('../styles/music-player.scss');

import React from 'react';
import Search from '../components/Search';
import Playlist from '../components/Playlist';
import PlayButton from '../components/PlayButton';

import playListStore from '../lib/store/playListStore';

const config = require('../config');
const Track = require('../lib/model/track');

class MusicPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      currentState: 'paused'
    };
  }

  componentDidMount() {
    Track.scan()
      .then(() => {
        this.setState({
          tracks: Track.content
        });
      })
      .catch(err => {
        console.trace(err);
        alert(`Scan library encounters an error! ${err}`);
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
    let buttonName = this.state.currentState === 'play' ? 'Pause' : 'Play';

    return (
      <div className="my-music-player">
        <div className="mp-playlist">
          <Playlist tracks={this.state.tracks} handleOnClick={this._handleItemClick.bind(this)} />
          <PlayButton status={this.state.currentState} handleOnClick={this._handleButtonClick.bind(this)} />
        </div>
        <div className="fixed-top">
          <span>
            Library Location: {config.libraryPath}
          </span>
          <span className="mp-search-bar">
            <Search found={[]} />
          </span>
        </div>
      </div>
    );
  }
}

export default MusicPlayerContainer;
