
// import fs module from the Node core library
var fs = require('fs');

// synchronously read a file;
// returns a Buffer object, a representation of arbitrary arrays of data
var buf = fs.readFileSync(process.argv[2]);

// convert Buffer objects to string
var str = buf.toString().split('\n');

console.log(str.length -1);
