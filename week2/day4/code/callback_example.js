const fs = require('fs');
// Callbacks PRo
// DRY, more generic and reusable
// asynchronous code

// Callback Cons
// hurt the brain
// execution flow is hard to track
// less readable
// callback hell


const add = (numOne, numTwo) => {
  return numOne + numTwo;
};

const subtract = (numOne, numTwo) => {
  return numOne - numTwo;
};

const multiply = (numOne, numTwo) => {
  return numOne * numTwo;
};

const mathAndPrint = (numOne, numTwo, doMath) => {
  const result = doMath(numOne, numTwo);
  console.log(result);
};

// console.log('add: '); 
// mathAndPrint(4, 7, add);
// console.log('subtract: ');
// mathAndPrint(4, 7, subtract);
// console.log('multiply: ');
// mathAndPrint(4, 7, multiply);

console.log('before readfile');
fs.readFile('./chorus.txt', 'utf8', (err, data) => {
  if(err) {
    console.log('there was an error', err);
  }
  console.log('the contents of the file are:', data);
  console.log('after readfile');
});

