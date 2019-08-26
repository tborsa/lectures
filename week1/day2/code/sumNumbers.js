
//Read arguments from command line
//loop through these arguments to test
const getArguments = function() {
  const userArgs = process.argv.slice(2);
  return userArgs;
};
const test =0;

//Check if input is a whole number
//If its not a whole number skip it
const checkWholesomeness = function(num) {
  const isNumber = Number(num);
  const isWhole = Number.isInteger(isNumber);
  function myTest(){console.log("her")};
  if (isNumber && isWhole) {
    return isNumber;
  }
  return 0;
};

//Add the numbers
const addWholeNumbers = function(numArr) {
  let sum = 0;
  for (let element of numArr) {
    sum += checkWholesomeness(element);
  }
  debugger;
  return sum;
};

console.log(addWholeNumbers(getArguments()));