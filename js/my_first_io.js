var fs = require('fs');
var buffer = fs.readFileSync('helloWord.js', 'utf8');
console.log(buffer);
