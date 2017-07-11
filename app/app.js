require('./styles/app.scss')
import React from 'react';
import ReactDOM from 'react-dom';
import MusicPlayerContainer from './containers/MusicPlayerContainer.jsx'

ReactDOM.render(
  <MusicPlayerContainer/>,
  document.getElementById('content')
);