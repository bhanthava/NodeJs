var express = require('express');
var app = express();
var fs = require('fs');
var gutil = require('gulp-util');

fs.exists('helloworld.txt', function(exists) {
  if(exists) {
    //Show in green
    console.log(gutil.colors.green('File exists. Deleting now ...'));
    fs.unlink('helloworld.txt');
  } else {
    //Show in red
    console.log(gutil.colors.red('File not found, so not deleting.'));
  }
});
app.listen(3000,function(){
    console.log("hey!! Server started at port 3000")
})
exports.app=app;