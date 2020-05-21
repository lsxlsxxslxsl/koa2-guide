// 通过文件流写入
const fs = require('fs');
const writeStream = fs.createWriteStream('../file/write.txt', 'utf8');

writeStream
    .on('close', function(){  // 已经关闭，不会再有事件抛出
        console.log('已经关闭');
    });

writeStream.write('hello ');
writeStream.write('world ');
writeStream.write('liusixin');
writeStream.end('');
