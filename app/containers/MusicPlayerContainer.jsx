require('../styles/music-player.scss');

import React from 'react';
import Search from '../components/Search.jsx';
import Playlist from '../components/Playlist.jsx';
import Data from '../data';

class MusicPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        {name: 'You can never tell' },
        {name: 'Hello world'}
      ]
    }
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <div className="my-music-player">
        <div className="mp-playlist">
          <Playlist
            songs={this.state.songs}
          />
        </div>
        <div className="fixed-top">
          <span className="mp-search-bar">
            <Search found={[]}/>
          </span>
        </div>
      </div>
    );
  }
}

export default MusicPlayerContainer;