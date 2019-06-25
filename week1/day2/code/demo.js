// Write a node program that takes in an unlimited
//number of command line arguments,
// goes through each and prints out the sum of them.
// If any argument is not a whole number,
// skip it. Do support negative numbers though.


// Need to take in command line arguments
const getInput = function() {
  return  process.argv.slice(2);
};

// Check an arguments
// Wholeness (integer and a number)

const checkWholesomeness = function(maybeNumber) {
  const num = Number(maybeNumber);
  if (num &&  Number.isInteger(num)) {
    return num;
  } else {
    return 0;
  }
};

// Pull out individual arguments
// Sum them up

const sumArguments = function(inputList) {
  let sum = 0;
  for (const input of inputList) {
    sum = sum + checkWholesomeness(input);
  }
  return sum;
};

const inputs = getInput();

console.log(sumArguments(inputs));



