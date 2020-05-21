// 文件是否存在
const fs = require('fs');

fs.access('../file/file.txt', function (err) {
  if (err) throw err;
  console.log('file.txt存在');
});

fs.access('./file1.txt', function (err) {
  if (err) throw err;
  console.log('file1.txt存在');
});
