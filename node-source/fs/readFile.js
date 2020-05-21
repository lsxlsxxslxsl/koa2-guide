const fs = require('fs');
// 同步读取
// let data;

// try {
//   data = fs.readFileSync('../file/file.txt', 'utf8');
//   console.log('文件内容: ' + data);
// } catch (err) {
//   console.error('读取文件出错: ' + err.message);
// }

// 异步读取
fs.readFile('../file/file.txt', 'utf8', function (err, data) {
  if (err) {
    return console.error('读取文件出错: ' + err.message);
  }
  console.log('文件内容: ' + data);
});
