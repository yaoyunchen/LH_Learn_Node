var fs = require('fs');
var file = process.argv[2];

file = fs.readFileSync(file);

var contents = file.toString();

console.log(contents.split('\n').length - 1);