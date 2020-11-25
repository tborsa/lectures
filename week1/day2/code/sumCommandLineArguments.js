// Write a node program that takes in an unlimited number of command 
// line arguments, goes through each and prints out the sum of them. 
// If any argument is not a whole number, skip it. 
// Do support negative numbers though.

// Parse the command line arguments
  // exclude non important (pathway) command line arguments
const getArguments = function() {
  //takes an existing array cuts off x number of elements and returns
  // new shortened array.
  return process.argv.slice(2);
}

// check if value is an integer
// make sure they are whole numbers
const checkForInteger = function(value) {
  // return true/false if integer
  const num = Number(value); // return nan or number;
  const integer = Number.isInteger(num); //returns a boolean true or false;
  if (num && integer) {
    return num;
  } else {
    return 0; // like not adding anything, is a falsey value
  }
}

// done in function
// Sum the integers/whole numbers
// need to use a loop
// [1,2,3,4]
const addArguments = function(arguments) {
  // return sum of the arguments
  let total = 0;
  for (let value of arguments) {
    total += checkForInteger(value);
  }
  return total;
}

const sum = function() {
  const arguments = getArguments();
  const total = addArguments(arguments);
  //print or display information to user
  console.log('The total of all whole numbers given is: ', total);
}

sum();
