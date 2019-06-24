
//want to get a list of arguments from user
//sum starts at 0
//loop through each argument
//  check if argument is an integer
//  if so add it to sum

const arguments = process.argv;

console.log(arguments);

//It includes "node" and "programname.js"
// we want to shorten array
const userArguments = process.argv.slice(2);

// create sum
let sum = 0;

//loop
for (let argument of userArguments) {
  debugger;
  console.log(argument);
}

//loop and check
for (let argument of userArguments) {
  if (Number.isInteger(argument)) {
    sum += Number(argument);
  }
}


