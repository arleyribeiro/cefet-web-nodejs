module.exports = {
  show_files: function(path1, ext) {
    var fs = require('fs');
    var path = require('path');
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
  }
};
