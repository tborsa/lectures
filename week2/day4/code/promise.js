const fsPromises = require('fs').promises;

// Promise?

// boundaries
// state rules and abide by rules
// making a gaurantee
// Something to keep up with in the future
// expectation
// duty to fufill
// fufill promise/ break promise

// WHY PROMISES?

// automatically seperate success/fail code
// handle different execution paths
// avoid callback hell/waterfall
// graceful way of handling multiple async action in order

fs.readFile('./verse1.txt', 'utf8', (err, data) => {
    if (err) {

    } else {
        console.log('this is the file data', data);
    }
});

let promise = fsPromises.readFile('./verse1.txt', 'utf8'); //returns the promise
promise.then((result) => {
    // runs when/if promise resolves
    console.log('promise succeeded', result);
});

promise.catch((error) => {
    // runs when/if promise rejected/fails
    console.log('promise failed', error);
});

fsPromises.readFile('./verse1.txt', 'utf8')
    .then((result) => {
        // runs when/if promise resolves
        console.log('promise succeeded', result);
    })
    .catch((error) => {
        // runs when/if promise rejected/fails
        console.log('promise failed', error);
    });

