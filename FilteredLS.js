// create a program that prints a list of files in a
// given directory, filtered by the extension of the files

// directory name will be the first argument
// file extensio to filterby is the second argument (add a . to front)

// the list of files should be printed to the console,
// one file per line

// use asynchronous I/O

var fs = require('fs');

fs.readFile(process.argv[2], function(err,data){

  fs.readdir('/path/to/dir/', )
