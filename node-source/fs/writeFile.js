var fs = require('fs');

// 同步写入
try {
  fs.writeFileSync('../file/write.txt', 'hello world', 'utf8');
  console.log('文件写入成功');
} catch (err) {
  throw err;
}

// 异步写入
// fs.writeFile('../file/write.txt', 'liusixin', 'utf8', function (err) {
//   if (err) throw err;
//   console.log('文件写入成功');
// });
