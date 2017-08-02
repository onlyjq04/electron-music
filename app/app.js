'use babel';
require('font-awesome/css/font-awesome.css');
require('./styles/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import MusicPlayerContainer from './containers/MusicPlayerContainer';
import TopBar from './containers/TopBar';

class App extends React.Component {
  render(){
    return (
      <div>
        <TopBar/>
        <MusicPlayerContainer />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
