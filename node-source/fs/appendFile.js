const fs = require('fs');

fs.appendFile('../file/write.md', '\nabcd', 'utf8', function (err) {
  if (err) throw err;
  console.log('append成功');
});
