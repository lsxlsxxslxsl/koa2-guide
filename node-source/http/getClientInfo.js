const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
  const urlObj = url.parse(req.url);
  console.log('urlObj', urlObj);
  const query = urlObj.query;
  console.log('query', query);
  const queryObj = querystring.parse(query);

  console.log(JSON.stringify(queryObj));

  res.end('ok');
});

server.listen(3000);
