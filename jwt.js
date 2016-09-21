var jwt = require('jsonwebtoken');
var fs = require('fs');

var content = require('./pigs/token.json')
var cert = fs.readFileSync('pkey');  
var tokenc=jwt.sign(content, cert,{ algorithm: 'HS256'});





console.log(content);
console.log('-----------------');
console.log(tokenc);
console.log('-----------------');
try {
  var result = jwt.verify(tokenc, cert);
  console.log(result);
  console.log(result.name);
} catch(err) {
  // err 
  //console.log(err);
}
