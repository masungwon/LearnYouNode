// create a program that prints a list of files in a
// given directory, filtered by the extension of the files

// directory name will be the first argument
// file extension to filterby is the second argument (add a . to front)

// the list of files should be printed to the console,
// one file per line

// use asynchronous I/O (the main part of this question is
// using asynchronous function to access our file directory)

var fs = require('fs');

//what is "path" and where does it come from?

fs.readFile(process.argv[2], function(err,data){
  //code
  
  //not synchronous; can't just put in into a variable b/
  //our javascript process isn't going to wait. it's going to keep running
  //the script while readDir goes and reads the files

  //so, when the data comes back, we won't be at that line anymore.
  //so we need to leave directions for readDir. Essentially,
  //"when you are done reading the file directoy, run this function"
  // (aka callback function)

  //so here, callback is the second parameter for readFile.
  //err is going to tell you if anything went wrong while
  //readFile was reading the direcotires, and data is the
  //data returned if it's successful.

  //first we need to handle any errors.

  if(err) console.error(err);
})
  //now we need to deal with data, which is the same data you got back
  //from fs.readFileSync (not readDir...)
  //So you can deal with it the same way; but anything you
  //do with it has to be inside the callback function
