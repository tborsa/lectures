const fs = require('fs');

console.log("before");
fs.readFile('test2.rb', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});
console.log("after");