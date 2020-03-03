const getCommandLineArguments = function() {
  return process.argv;
};

const checkForWholesomeness = function(argument) {
  let isNumber = Number(argument);
  let isWhole = Number.isInteger(isNumber);
  if (isWhole) {
    return isNumber;
  } else {
    return 0;
  }
};

const getValidArguments = function(arr) {
  let validArguments = [];
  for (let argument of arr) {
    //
    let result = checkForWholesomeness(argument);
    if (results) {
      validArguments.push(result);
    }
  }
  return validArguments;
};

const addNumbers = function(arrIntegers) {
  let sum = 0;
  for (let int of arrIntegers) {
    sum += int;
  }
  return sum;
};

let input = getCommandLineArguments();
let validInput = getValidArguments(input);
let sum = addNumbers(validInput);
console.log(sum);

const printNumbers = function(nums) {
  console.log(nums);
};

