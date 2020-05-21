// 通过文件流读取
// 适合读取大文件
const fs = require('fs');
const readStream = fs.createReadStream('../file/file.txt', 'utf8');

readStream
    .on('data', function(chunk) {
        console.log('读取数据: ' + chunk);
    })
    .on('error', function(err){
        console.log('出错: ' + err.message);
    })
    .on('end', function(){  // 没有数据了
        console.log('没有数据了');
    })
    .on('close', function(){  // 已经关闭，不会再有事件抛出
        console.log('已经关闭');
    });
