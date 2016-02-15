function sumNumbers (args) {
  var result = 0;
  for (var i = 2; i < args.length; i ++) {
    result += Number(args[i]);
  }
  return result;
}

console.log(sumNumbers(process.argv));
