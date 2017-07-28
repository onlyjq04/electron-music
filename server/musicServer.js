const http = require('http');
const fs = require('fs');

const testP = '/Users/yjq/Projects/electron-music/test/teststream.txt'

function musicServer(url) {
  const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(url);
    readStream.pipe(res);
  });
  return server;
}

let s = musicServer(testP);
s.listen(0, 'localhost', function () {
  console.log(s.address())
});