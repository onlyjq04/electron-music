const {ipcRenderer} = require('electron');
const remote = require('electron').remote;
const {app} = remote;
const library = require('../model/library')(app.getPath('userData'));

let currentPlaying = null;

const playListStore = {
  getTracks() {
    let tracks = library.getContent();
    return tracks;
  },
  listLibraries() {
    return library.listLibraryPath();
  },
  addToLib(dir) {
    return library.addLibraryPath(dir);
  },
  deleteLibrary(dir) {
    return library.deleteLibraryPath(dir);
  },
  notifyOnClick(song) {
    let notif = new window.Notification('Now Playing', {
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
