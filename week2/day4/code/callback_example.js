// Callback Review

// What is a callback?

// Higher order function -> a function that takes another function as a parameter
  // when a function calls another function
// callback -> is the function run by another function

// Why?
// Make code more modular
// run async code
// 'return' retrieve async data
// 'waiting' for things to finish
// conditional action

// The Bad?
// Callback hell
// code hard to read/understand
// harder to code async/callbacks
// can't use traditional return statements



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

console.log('add: '); 
mathAndPrint(4, 7, add);
console.log('subtract: ');
mathAndPrint(4, 7, subtract);
console.log('multiply: ');
mathAndPrint(4, 7, multiply);

