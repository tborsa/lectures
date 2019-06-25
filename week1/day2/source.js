//take an unlimmited number of command line argum
const getArguments = function() {
  const arguments = process.argv.slice(2);
  return arguments;
};
//commit
//console.log(getArguments());

// check if argument is number and return it
// what are the options for our string?
const getInteger = function(string) {
  const num = Number(string);
  const isInteger = Number.isInteger(num);
  if (num && isInteger) { //will return NAN if not integer ie falsey
    return num;
  } else {
    return 0;
  }
};
//commit
//console.log(getInteger("dog"));

//loop through each argument
const loopArguments = function(arguments) {
  let sum = 0;
  for (const argument of arguments) {
    debugger;
    sum += getInteger(argument);
  }
  return sum;
};
const arguments = getArguments();
console.log(loopArguments(arguments));

//commit