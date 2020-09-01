
// ++++++ FUNCTION DECLARATIONS ++++++++++++

// Get the input/arguments/numbers from the user.
const getArguments = function() {
  return process.argv.slice(2);
};

// Check if an input is a whole number/integer.
const checkForInteger = function(input) {
  // input is strings
  // THIS IS BAD fix thi 
  const num = Number(input); // NAN
  return (num && Number.isInteger(num)) ? num : 0;
};

// input arr is a mix of strings and numbers
const sumIntegerValues = function(inputArr) {
  let sum = 0;
  for (const input of inputArr {
    sum += checkForInteger(input);
  }
  return sum;
};

const getAndSumArguments = () => {
  const userArguments = getArguments();
  const sum = sumIntegerValues(userArguments);
  console.log('The total summed integers of the users input is: ', sum);
};

getAndSumArguments();
