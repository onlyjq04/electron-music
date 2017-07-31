const path = require('path');
const app = require('./src/app.electron');
module.exports = {
  rootPath: app.getAppPath(),
  userDataPath: path.join(this.rootPath, 'user-data.json'),
  musicIndexPath: path.join(this.rootPath, 'music-index.json')
};
