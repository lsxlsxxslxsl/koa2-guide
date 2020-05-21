const fs = require('fs');

fs.mkdir('../file/dir', function (err) {
  if (err) throw err;
  console.log('目录创建成功');
});

// try {
//   fs.mkdirSync('../file/dir');
//   console.log('创建目录成功');
// } catch (e) {
//   throw e;
// }
