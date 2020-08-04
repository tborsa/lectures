// higher order function
const sumAndPrint = (num1, num2, print) => {
  const sum = num1 + num2;
  print(sum);
};

sumAndPrint(5, 8, (sum) => {
  console.log(sum);
});

sumAndPrint(5, 8, (sum) => {
  console.log(`The sum of your values is: ${sum}`);
});

// Why do we use callbacks?
// 1. Our function has 1 concern, specific.
// 2. Modular/easier to test
// 3. Allows us to work with asynchronous flow. 
// 4. Easier to write and read*
// 5. Easier to debug. 

// Non Blocking/Async