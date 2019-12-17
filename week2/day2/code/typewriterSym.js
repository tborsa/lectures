const fs = require('fs');
//simulates a typewriter
// take in user input
//save that input to a external file

// process.stdin.setEncoding('utf8');

console.clear();
console.log('~~Welcome to type Sym!!~~');

process.stdin.on('data', function(data) {
  console.clear();
  fs.appendFile('ourStoryTheSequel.txt', data, function() {
    console.log('Ping!!');
    console.log("\007");
    setTimeout(function() {
      console.clear();
    }, 500);

  });
});

process.stdin.on('end', function() {
  console.log("Thanks for typing your content has been saved!!");
});


