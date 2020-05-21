// 遍历目录

const fs = require('fs');
const path = require('path');

const getFilesInDir = function (dir) {
  let results = [path.resolve(dir)];
  const files = fs.readdirSync(dir, 'utf8');

  files.forEach(function (file) {
    file = path.resolve(dir, file);

    const stats = fs.statSync(file);

    if (stats.isFile()) {
      results.push(file);
    } else if (stats.isDirectory()) {
      results = results.concat(getFilesInDir(file));
    }
  });

  return results;
};

const files = getFilesInDir('../file');
console.log(files);
