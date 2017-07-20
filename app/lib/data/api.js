const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = Promise.promisifyAll(require('path'));

// const db = require('./db');

const MUSIC_EXT = ['.mp3', '.acc'];

export default {
  getTracks: function(libraryPath) {
    return fs.readdirAsync(libraryPath, 'utf-8').then(files => {
      let musics = files
        .filter(f => {
          return MUSIC_EXT.indexOf(path.extname(f)) > -1;
        })
        .map(f => {
          return {
            name: f
          };
        });
      return musics;
    });
  }
};
