var Promise = require('bluebird');
const config = require('../../config');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');

const MUSIC_EXT = ['.mp3'];

const MUSICINDEX = path.join(config.rootPath, 'music-index.json');

function load() {
  return fs.readFileAsync(MUSICINDEX).then(content => {
    this.content = JSON.parse(content);
  });
}

function create({title, url}) {
  const data = {
    title,
    url
  };
  return fs.appendFileAsync(MUSICINDEX, data);
}

function scan() {
  return fs
    .readdirAsync(this.libraryPath, 'utf-8')
    .then(musicFiles => {
      const toLoad = musicFiles.reduce((result, f) => {
        if (MUSIC_EXT.indexOf(path.extname(f)) > -1) {
          const url = path.join(this.libraryPath, f),
            data = {
              title: f,
              url: url
            };
          result.push(data);
        }
        return result;
      }, []);
      return fs.writeFileAsync(MUSICINDEX, JSON.stringify(toLoad, null, 2), 'utf-8');
    });
}

const proto = {
  create,
  scan,
  load
};

let instance = null;

module.exports = function(libPath = config.libraryPath) {
  if (!instance) {
    instance = Object.assign(Object.create(proto), {
      libraryPath: libPath,
      content: null
    });
  }
  return instance;
};
