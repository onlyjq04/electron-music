require('../styles/music-player.scss');

import React from 'react';
import Search from '../components/Search';
import Playlist from '../components/Playlist';
import PlayButton from '../components/PlayButton';


import data from '../lib/data/api';

import config from '../config';
import playListStore from '../lib/store/playListStore';

class MusicPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentPlaying: null,
      buttonName: 'Play'
    };
  }

  componentDidMount() {
    data.getTracks(config.libraryPath).then(tracks => {
      this.setState({songs: tracks});
    });
  }

  _handleClick(song) {
    playListStore.notifyOnClick(song);
    
    playListStore.togglePlay(this.state.buttonName, song);
    this.setState({
      currentPlaying: song,
      buttonName: 'Pause'
    });
  }
  
  _handleButtonClick() {
    playListStore.notifyOnClick(this.state.currentPlaying);
    playListStore.togglePlay(this.state.buttonName, this.state.currentPlaying);
    if (this.state.currentPlaying && this.state.buttonName === 'Play') {
      this.setState({
        buttonName: 'Pause'
      });
    } else {
      this.setState({
        buttonName: 'Play'
      });
    }
  }

  render() {
    return (
      <div className="my-music-player">
        <div className="mp-playlist">
          <Playlist songs={this.state.songs} handleOnClick={this._handleClick.bind(this)} />
          <PlayButton displayName={this.state.buttonName} handleOnClick={this._handleButtonClick.bind(this)}/>
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
