const http = require('http');
const server = http.createServer((req, res) => {
  const rs = require('fs').createReadStream('./test_files/test.mp3');
  rs.pipe(res);
  res.on('finish', console.log);
});

server.listen(3001);
server.on('connect', function (socket) {
  console.log('connected', socket)
})