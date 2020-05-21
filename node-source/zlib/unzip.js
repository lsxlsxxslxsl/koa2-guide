var fs = require('fs');
var zlib = require('zlib');

var gunzip = zlib.createGunzip();

var inFile = fs.createReadStream('../file/file.txt.gz');
var outFile = fs.createWriteStream('../file/file.txt');

inFile.pipe(gunzip).pipe(outFile);
