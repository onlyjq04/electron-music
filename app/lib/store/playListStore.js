import config from '../../config';

const {ipcRenderer} = require('electron');
const fs = require('fs');
const path = require('path');


const playListStore = {
  notifyOnClick(song) {
    let notif = new window.Notification('You have clicked on a song', {
      body: song,
      silent: true
    });
    ipcRenderer.send('song', song);
  },
  togglePlay(buttonName, audio) {
  }
};


export default playListStore;