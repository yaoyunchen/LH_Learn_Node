var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
  var extension = "." + ext;

  fs.readdir(dirname, function(err, files) {
    
    if (err) {
      callback(err, null);
    }
    else {
      result = [];
      files.forEach(function(entry) {
        if (path.extname(entry) == extension) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });
  
};


// function bar (callback) {  
//  foo(function (err, data) {  
//    if (err)  
//      return callback(err) // early return  
 
//    // ... no error, continue doing cool things with `data`  
 
//    // all went well, call callback with `null` for the error argument  
 
//    callback(null, data)  
//  })  
// }  