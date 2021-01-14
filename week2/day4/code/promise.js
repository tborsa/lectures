const fs = require('fs').promises; // handle the async with callbacks or promises

// Promises an agreement to do some async stuff
// What are they?

// Something your going to stick to 
// Commitment to do something
// I owe u
// Can break promises (not deliver on)
// will be resolved broken or fufilled
// promises are between two parties
// promises involve some time
// Future

// will now return a promise
// promise has 2 attributes
// promise state: pending, fufilled, rejected
// promise resovle value: <any js value>

// state: pending, resolve value: undefined
const prom = fs.readFile('./choruss.txt', 'utf8');

// state: fufilled, resolve value: file data
prom.then((data) => {
  // catch fufilled promise :)
  console.log('the file was read');
  console.log('the data passed', data);
});

// state: rejected, resolve value: error
prom.catch((err) => {
  // catch rejected promise :(
  console.log('something went wrong');
  console.log('the error was', err);
})
