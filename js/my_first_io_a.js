var fs = require('fs');
fs.readFile('js/my_first_io.js',"utf8", function(err, data) {
  if(err)
    throw err;
    console.log(data);
});
