const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
  let body = '';
  req.on('data', function (thunk) {
    body += thunk;
  });

  req.on('end', function () {
    console.log('post body is: ' + body);
    res.end('ok');
  });
});

server.listen(3000);
