var myModule = require('./06_modular_module.js');

var dirname = process.argv[2];
var ext = process.argv[3];

myModule(dirname, ext, function(err, files) {
  if (err) {
    return console.log("An error occured:", err)
  } else {
    for (i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
  }
});