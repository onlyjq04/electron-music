import React from 'react';
import Playlist from '../components/Playlist';
import Player from '../components/Player';

const library = require('../model/library');
const {ipcRenderer} = require('electron');

class MusicPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.currentPlaying = null;
    this.state = {
      tracks: [],
      currentState: 'init',
      playingUrl: null
    };
  }

  componentDidMount() {
    this.setState({
      tracks: library.getContent()
    });
  }

  _handleItemClick(track) {
    let notif = new window.Notification('Now Playing', {
      body: track.title,
      silent: true
    });
    ipcRenderer.send('track', track);
    switch (this.state.currentState) {
      case 'init':
        this.currentPlaying = new Audio(track.url);
        this.currentPlaying.play();
        this.setState({
          currentState: 'playing',
          playingUrl: track.url
        });
        return;
      case 'playing':
        if (track.url === this.state.playingUrl) {
          this.currentPlaying.pause();
          this.setState({
            currentState: 'paused'
          });
        } else {
          this.currentPlaying.pause();
          this.currentPlaying = new Audio(track.url);
          this.currentPlaying.play();
          this.setState({
            playingUrl: track.url
          });
        }
        return;
      case 'paused':
        if (track.url === this.state.playingUrl) {
          this.currentPlaying.play();
          this.setState({
            currentState: 'playing'
          });
        } else {
          this.currentPlaying = new Audio(track.url);
          this.currentPlaying.play();
          this.setState({
            currentState: 'playing',
            playingUrl: track.url
          });
        }
        return;
    }
  }

  _playOnClick() {
    switch (this.state.currentState) {
      case 'init':
        return;
      case 'playing':
        this.currentPlaying.pause();
        this.setState({
          currentState: 'paused'
        });
        return;
      case 'paused':
        this.currentPlaying.play();
        this.setState({
          currentState: 'playing'
        });
        return;
    }
  }

  getPlayButtonType() {
    switch (this.state.currentState) {
      case 'init':
        return 'play';
      case 'playing':
        return 'pause';
      case 'paused':
        return 'play';
    }
  }

  render() {
    return (
      <div>
        <div>
          <Playlist tracks={this.state.tracks} handleOnClick={this._handleItemClick.bind(this)} />
          <Player playerStatus={this.getPlayButtonType()} playOnClick={this._playOnClick.bind(this)} />
        </div>
      </div>
    );
  }
}

export default MusicPlayerContainer;
