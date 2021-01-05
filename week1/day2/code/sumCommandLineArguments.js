// Write a node program that takes in an unlimited number of command line arguments, 
// goes through each and prints out the sum of them. If any argument is not a whole 
// number, skip it. Do support negative numbers though.

// user has to enter agruments
// we need to read the argumetns
// (remove uneeded info)
// do we need this as a function?
const getArguments = function() {
    // console.log('process: ', process.argv.slice(2));
    return process.argv.slice(2);
};

// check if number is a whole number
const checkWholesomeness = function(input) {
  // convert strings to numbers
  // google a lot of these things
  const num = Number(input); //either return a number or NaN
  const isInteger = Number.isInteger(num); //true or false
  // debugger;
  if (isInteger) {
    return num;
  } else {
    return 0;
  }
};

// loop through arguments
// sum (Make sure Number)
const addArguments = function(arguments) {
  let sum = 0;

  for (let [index, value] of arguments.entries()) {
    let wholeNumber = checkWholesomeness(argument);
    sum += wholeNumber;
  }
  return sum;
}

const arguments = getArguments();
const total = addArguments(arguments);
console.log('Your total is:', total);