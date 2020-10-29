// Write a node program that takes in an unlimited number of 
// command line arguments, goes through each and prints out the 
// sum of them. If any argument is not a whole number, skip it. 
// Do support negative numbers though.

// getting command line arguments
const getArguments = function() {
  const arguments = process.argv.slice(2);
  debugger;
  return arguments;
};

// whole number check
const checkWholesomeness = function(value) {
  // check if number
  const num = Number(value); // return NaN or the number(typed as number)
  const integer = Number.isInteger(num);
  if (num && integer) { // NaN is falsey
    // is integer number
    // check if that number is interger
    return num;
  } else {
    // not number
    return 0;
  }
}

// console.log('Test of checkWholesomeness cat', checkWholesomeness('cat'));
// console.log('Test of checkWholesomeness 5', checkWholesomeness('5'));
// console.log('Test of checkWholesomeness 3.5', checkWholesomeness('3.5'));
// console.log('Test of checkWholesomeness 4', checkWholesomeness(4));
// console.log('Test of checkWholesomeness -4', checkWholesomeness(-4));

// Sum an array of user inputs
// userInput is an array of user input ['dog', 'cat', 1, 32 , 6]
const sumUserInputs = function(userInput) {
  let sum = 0;
  for (const input of userInput) {
    // check wholesomeness & sum
    const numberToSum = checkWholesomeness(input); // returns 0 or a number to sum
    sum += numberToSum;
  }
  return sum;
}

const userArguments = getArguments();
const sum = sumUserInputs(userArguments);

console.log('The total sum is:', sum);