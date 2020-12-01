
// let x = 1;
// console.log('before set timeout', x); //1

// setTimeout(() => {
//   x += 1;
//   console.log('inside the setTimeout', x); //3
// }, 1000); // minimum wait of x

// x = 5;
// console.log('after timeout', x);

// blocking actions
// I/O input/output  

const fs = require('fs');

console.log('before file write');

// fs.writeFile('demofile.txt', 'this is new text two', (err) => {
//   if (err) {
//     console.log('err', err);
//   } else {
//     console.log('file writen');
//   }
// })

const sum = (numB, numA) => { //1
  return Number(numB) + Number(numA); //9
}


fs.readFile('demofile.txt', 'utf8', (err, number1) => { //2
  console.log("the info from the file was", number1); //3
  fs.readFile('num2.txt', 'utf8', (err, number2) => { //4
    const result = sum(number1, number2); //5
    console.log("the info from the file was", number2); //6
    console.log('the sum of both numbers  is', result); //7
  });
  console.log('after read 1'); //5
});

console.log('after async'); //3






