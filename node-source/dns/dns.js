const dns = require('dns');

// dns.lookup('www.qq.com', { all: true }, function (err, address, family) {
//   if (err) throw err;
//   console.log('例子A: ', address);
// });

dns.resolve6('id.qq.com', function (err, address) {
  if (err) throw err;
  console.log(JSON.stringify(address));
});
