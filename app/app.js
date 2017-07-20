'use babel';
require('font-awesome/css/font-awesome.css');
require('./styles/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import MusicPlayerContainer from './containers/MusicPlayerContainer';

ReactDOM.render(<MusicPlayerContainer/>, document.getElementById('content'));
