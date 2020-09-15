// Write a node program that takes in an unlimited number of command 
// line arguments, goes through each and prints out the sum of them. 
// If any argument is not a whole number, skip it. Do support negative numbers though.

// get arguments/input from the user  
const getArguments = function() {
  // slice return a new array
  const userArguments = process.argv.slice(2);  // [0, 1, 2, 3, 4, 5, 6] => [2, 3, 4, 5, 6]
  return userArguments;
};

// check if a number is a whole number
const checkWholesomeness = function(userInput) {
  // starting with strings
  // check if it's a number
  const isNumber = Number(userInput); // => number or => NaN
  if (isNumber) { // if number is 0 would also be falsey
    // return whether the input is a whole number
    if (Number.isInteger(isNumber)) {
      return isNumber;
    }
  }
  return 0;
};

const loopArguments = function(userArguments) {
  // loop for each argument
  let sum = 0;
  for (let arg of userArguments) {
    // sum the number (if it is whole)
    const wholeNumber = checkWholesomeness(arg);
    if (wholeNumber) { //if whole number's value is truthy
      // sum
      sum += wholeNumber;
    }
  }
  return sum;
};

const userArguments = getArguments();

// display results to user
console.log('the sum is: ', loopArguments(userArguments));

