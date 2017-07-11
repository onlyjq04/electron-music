// /**
//  * Created by yjq on 11/07/2017.
//  */
// const bluebird = require('bluebird');
// const remote = require('src').remote;
// const path = remote.require('path');
// const fs = bluebird.promisifyAll(require('fs'));
//
// const MUSIC_EXT = [
//   '.mp3', '.acc'
// ];
//
// module.exports = {
//   getTracks: function (directory) {
//     let readdir = directory ? directory : path.resolve(__dirname, '..', '..', 'music');
//     fs.readdirAsync(readdir, 'utf-8')
//       .then((files) => {
//         let music = files.filter(f => {
//           return MUSIC_EXT.indexOf(path.extname(f)) > -1
//         });
//         return music;
//       });
//   }
// };