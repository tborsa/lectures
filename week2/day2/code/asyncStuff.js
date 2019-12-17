const fs = require('fs');

console.log('before async');

fs.readFile('read.txt', 'utf8', function(err, data) {
  console.log('this is the file data', data);
  //everything that depends on the data has to be included here!!!
});

fs.writeFile('read.txt', 'new text to be added', function(err) {
  if (!err) {
    console.log("wrote to read.txt");
  } else {
    console.log('something went wrong!');
  }
});

//we dont need the result of the write


console.log('after async');