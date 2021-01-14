const fs = require('fs').promises; // the fs library normal

const lyrics = [];

// promises async stuff in order 1 -> 2 -> 3
fs.readFile('./verse1.txt', 'utf8') // promise 1 verse1 promise
  .then((data) => {
    lyrics.push(data);
    return fs.readFile('./chorus.txt', 'utf8'); //promise 6 chorus promise
  }) // promise 2 then1 promise
  .then((data) => {
    lyrics.push(data);
    return fs.readFile('./verse2.txt', 'utf8'); //promise 7 verse 2 promise
  }) // promise 3 then2 promise
  .then((data) => {
    console.log(lyrics);
  }) // promise 4 then3 promise
  .catch((err) => {
    console.log('something went wrong', err);
  }) //promise 5 catch1 promise

// broken down into labeled variables
const verse1promise = fs.readFile('./verse1.txt', 'utf8') // promise 1
const then1promise = verse1promise.then((data) => {
    lyrics.push(data);
    return fs.readFile('./chorus.txt', 'utf8'); // 6 promise
  }) // promise 2
const then2promise = then1promise.then((data) => {
    lyrics.push(data);
    return fs.readFile('./verse2.txt', 'utf8'); //7 promise
  }) // promise 3
const then3promise = then2promise.then((data) => {
    console.log(lyrics);
  }) // promise 4
const catch1promise = then3promise.catch((err) => {
    console.log('something went wrong', err);
  }) //promise 5


// fs.readFile('./verse1.txt', 'utf8', (err, data) => { //first
//   if (err) {
//     return console.log('something went wrong ', err);
//   }
//   const lyrics = [];
//   lyrics.push(data);

//   fs.readFile('./chorus.txt', 'utf8', (err, data) => { //second
//     if (err) {
//       return console.log('something went wrong ', err);
//     }
//     lyrics.push(data);

//     fs.readFile('./verse2.txt', 'utf8', (err, data) => { //third ...
//       if (err) {
//         return console.log('something went wrong ', err);
//       }
//       lyrics.push(data);
      
//       fs.readFile('./chorus.txt', 'utf8', (err, data) => {
//         if (err) {
//           return console.log('something went wrong ', err);
//         }
//         lyrics.push(data);
//         console.log("current lyrics", lyrics);
//       });
//     });
//   });
// });
