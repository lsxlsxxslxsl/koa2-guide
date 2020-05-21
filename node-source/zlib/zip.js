var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('../file/file.txt');
var out = fs.createWriteStream('../file/file.txt.gz');

inFile.pipe(gzip).pipe(out);
