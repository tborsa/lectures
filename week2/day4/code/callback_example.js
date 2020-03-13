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