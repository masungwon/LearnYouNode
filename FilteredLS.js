var fs = require('fs'); // long file that exports an object; this object has a lot of functions

var path=require('path');
//console.log(process);
fs.readdir(process.argv[2], function(err,data){
  if(err) console.error(err);
  var filteredlist = data.filter(function(file) {
    //console.log(path.extname(file));
    return (path.extname(file) == "." + process.argv[3]);
  })
  for (var i=0; i<filteredlist.length; i++) {
    console.log(filteredlist[i]);
  }
});
