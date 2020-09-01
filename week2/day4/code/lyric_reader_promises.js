const fs = require('fs').promises;

const prom = new Promise((resolve, reject) => {
  // any code
  // do a file read'
  // check if returned
  resolve(5);
  // otherwise
  reject("failed");
});

const rej = Promise.reject(); // testing/error handling
const fuff = Promise.fulffiled(); // testing/error handling

  
const lyrics = [];
const p1 = fs.readFile('./verse1.txt', 'utf8') // 1
  .then((data) => {
    lyrics.push(data);
    const p2 = fs.readFile('./chorus.txt', 'utf8'); //2
    return p2;
  }) // creates a promise 5 promise eventually gets resolved/rejected when previous then is handled
  .then((data2) => {
    lyrics.push(data2);
    const p3 = fs.readFile('./verse2.txt', 'utf8'); //3
    return p3;
  }) // 6
  .then((data3) => {
    lyrics.push(data3);
    const p4 = fs.readFile('./chorus2.txt', 'utf8'); //4
    return p4;
  }) //7
  .then((data4) => {
    lyrics.push(data4);
    console.log('all the lyrics', lyrics);
  }) // 8
  .catch((err) => {
    console.log('Was able to get this much lyrics,', lyrics);
    console.log('error', err);
  }); //9