var fs = require('fs');
var path = require('path');

var path1 = process.argv[2];
var ext = process.argv[3];

fs.readdir(path1, function(err, files) {
  if(err) {
    throw err;
  }

    for (var i in files) {
      if (path.extname(files[i]) === ("."+ext)) {
        console.log(files[i]);
      }
    }
});
