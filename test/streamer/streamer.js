const request = require('superagent');
const path = require('path');
const should = require('should');

var Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

let streamer = require('../app/model/streamer'),
  url = path.join(__dirname, 'test_files', 'test.mp3');

describe('test music server streaming', () => {
  it('should get the piping data', () => {
    return new Promise(function (resolve) {
      let writeStream = fs.createWriteStream(path.join(__dirname, 'test_files', 'piped.txt'));
      streamer.play(url, writeStream, function () {
        return resolve();
      });
    });
  });
});
