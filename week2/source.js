//First async example
console.log('BEFORE CALL');

setTimeout(() => console.log('INSIDE CALL'), 1000);

console.log('AFTER CALL');

//Scope example

let x = 1;
console.log('BEFORE CALL: ', x);

setTimeout(() => {
  x = 2;
  console.log('INSIDE CALL: ', x);
}, 1000);

//what if we add this here
// x ++;

console.log('AFTER CALL', x);

//Readfile example

var fs = require('fs');
fs.readFile('demofile1.html', function(err, data) {
  console.log(data);
});
// then add

fs.writeFile('demofile1.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });