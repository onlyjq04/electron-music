var Promise = require('bluebird');
const config = require('../../config');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const MUSIC_EXT = ['.mp3'];

const MUSICINDEX = path.join(config.rootPath, 'music-index.json');

class Track {
  constructor(musicIndex) {
    if (!instance) {
      instance = this;
    }

    this.musicIndex = musicIndex;
    this.content = null;
    return instance;
  }

  load() {
    return fs.readFileAsync(this.musicIndex).then(content => {
      this.content = JSON.parse(content);
      return Promise.resolve();
    });
  }

  create(title, url) {
    let data = {
      title,
      url
    };
    return fs.appendFileAsync(this.musicIndex, data);
  }

  scan() {
    let self = this;
    return fs
      .readdirAsync(config.libraryPath, 'utf-8')
      .then(musicFiles => {
        let toLoad = [];
        musicFiles.forEach(function(f) {
          if (MUSIC_EXT.indexOf(path.extname(f)) > -1) {
            let url = path.join(config.libraryPath, f),
              data = {
                title: f,
                url: url
              };
            toLoad.push(data);
          }
        });
        return fs.writeFileAsync(self.musicIndex, JSON.stringify(toLoad, null, 2), 'utf-8');
      })
      .then(() => {
        return self.load();
      })
      .then(() => {
        return Promise.resolve();
      });
  }
}

let instance = null;

module.exports = new Track(MUSICINDEX);
