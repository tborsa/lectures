

const sum = (numA, numB) => {
  return numA + numB;
}

const difference = (numA, numB) => {
  return numA - numB;
}

// higher order function
const doMath = (numA, numB, mathFunction) => {
  console.log('The result of the ', mathFunction, ' operation is:', mathFunction(numA, numB));
}

doMath(5, 7, sum); // sum acts as the callback
doMath(5, 7, difference); //difference acts as the callback

// Make our code more modular, 
// don't have to repeat ourselves
