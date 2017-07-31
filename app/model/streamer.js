const http = require('http');
const fs = require('fs');
const agent = require('superagent');

const service = http.createServer();
let readStream, stat;

service.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size
  });

  res.on('finish', () => {
    console.log('sent successfully');
  });

  readStream.pipe(res);
});

service.on('connect', function(socket) {
  console.log(`connected ${socket}`);
});

service.listen(0, 'localhost');

module.exports = {
  play(url, writable, cb) {
    let getUrl = 'http://localhost:' + service.address().port;
    readStream = fs.createReadStream(url);
    stat = fs.statSync(url);
    let response = agent.get(getUrl).pipe(writable);
    response.on('finish', cb);
  }
};
