var Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const MUSIC_EXT = ['.mp3'];
const musicIndexFileName = 'music-index.json';
const settingFileName = 'user-setting.json';

let userData, content, indexPath;

let initialized = false;

function _loadContent() {
  content = JSON.parse(fs.readFileSync(indexPath));
}

function _buildIndex() {
  let musicFiles = [];

  userData.library.forEach(dir => {
    let files = fs.readdirSync(dir, 'utf-8');
    files.forEach(f => {
      if (MUSIC_EXT.indexOf(path.extname(f)) > -1) {
        const url = path.join(dir, f),
          data = {
            title: f,
            url: url
          };
        musicFiles.push(data);
      }
    });
  });

  fs.writeFileSync(indexPath, JSON.stringify(musicFiles, null, 2), 'utf-8');
  _loadContent();
}

module.exports = function(configPath) {
  const userSettingPath = path.join(configPath, settingFileName);

  if (!initialized) {
    if (!fs.existsSync(userSettingPath)) {
      userData = {
        user: 'Default',
        library: []
      };
      fs.writeFileSync(userSettingPath, JSON.stringify(userData, null, 2));
    } else {
      userData = require(userSettingPath);
    }

    indexPath = path.join(configPath, musicIndexFileName);

    _buildIndex();

    initialized = true;
  }

  return {
    buildIndex: _buildIndex,
    getLibraryPath() {
      return userData.library;
    },

    addLibraryPath(dir) {
      userData.library.push(dir);
      fs.writeFileSync(userSettingPath, JSON.stringify(userData, null, 2));
    },

    listLibraryPath() {
      return userData.library;
    },

    deleteLibraryPath(dir) {
      let idx = userData.library.indexOf(dir);
      userData.library.splice(idx, 1);
      return idx;
    },

    getContent() {
      return content;
    }

    // addOneTrack({title, url}) {
    //   const data = {
    //     title,
    //     url
    //   };
    //   return fs.appendFileAsync(musicIndexPath, data);
    // },
  };
};
