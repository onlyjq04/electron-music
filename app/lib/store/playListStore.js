const config = require('../../config');
const {ipcRenderer} = require('electron');
const fs = require('fs');
const path = require('path');

let currentPlaying = null;

const playListStore = {
  notifyOnClick(song) {
    let notif = new window.Notification('You have clicked on a song', {
      body: song,
      silent: true
    });
    ipcRenderer.send('song', song);
  },
  togglePlay(currentState, track) {
    if (track) {
      if (currentPlaying) {
        currentPlaying.pause();
      }
      currentPlaying = new window.Audio(track.url);
      currentPlaying.play();
      return 'play';
    } else {
      if (currentState === 'paused') {
        if (currentPlaying) {
          currentPlaying.play();
          return 'play';
        } else {
          return 'paused';
        }
      } else {
        currentPlaying.pause();
        return 'paused';
      }
    }
  }
};

export default playListStore;
