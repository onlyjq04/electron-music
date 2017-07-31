const http = require('http');
const fs = require('fs');
var Promise = require('bluebird');

/**
 * Create a music server on demand, close when it finished streaming
 * @param {String} url 
 */
function musicServer(url) {
  return new Promise(function(resolve, reject) {
    const server = http
      .createServer((req, res) => {
        const readStream = fs.createReadStream(url);
        readStream.pipe(res);
      })
      .listen(0, 'localhost', function() {
        return resolve(server.address().port);
      });
  });
}
