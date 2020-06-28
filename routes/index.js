const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.resolve(__dirname), 'utf8');
let routes = [];

files
  .filter((item) => item.indexOf('index') === -1)
  .forEach((item) => {
    routes = [...routes, ...require(`./${item}`)]
  });


module.exports = routes;
