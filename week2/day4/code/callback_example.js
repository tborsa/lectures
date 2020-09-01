// Callback Review

// - function that is passed as a parameter
// - helper function that you wait to use.
// - can return a value, but don't typically (especially when used asynchronously)
// - Asynchronous
  // - happens simultaneously* (Js does one thing at a time, but the OS can make progress on other things)
  // - Executes after code has run
  // - non blocking
  // - runs code that we can complete without waiting for the code we can't

// Advantages of Callbacks
  // - Code is more modular
  // - only way (currently) to handle async code

// Disadvantages
  // - Breaks our brains it's confusing to write 
  // - Susceptable to callback hell


const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

// ... + other  math functions

// does some math on 2 numbers and prints output
const mathAndPrint = (num1, num2, cb) => { //cb is the math function to run on the numbers
  console.log(cb);
  console.log(`the math on ${num1} and ${num2} resulted in: `, cb(num1, num2));
};

mathAndPrint(5, 8, add);

mathAndPrint(5, 8, subtract);

mathAndPrint(5, 8, multiply);
