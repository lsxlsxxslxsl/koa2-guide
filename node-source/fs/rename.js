const fs = require('fs');

fs.rename('../file/write.txt', '../file/write.md', function (err) {
  if (err) throw err;
  console.log('重命名成功');
});

// fs.renameSync('../file/write.txt', '../file/write.md');
