const { promises } = require('fs');

const fs = require('fs').promises;

const lyrics = [];

// How many promises are created in this example?

// then is a method of promises
// catch is a method of promises

const myPromise = new Promise((resolve, reject) => { //1
  // do async logic
  // successfull
  if (true) {
    resolve(5);
  } else {
    // failure
    reject(7);
  }

});

myPromise // => rejected
  .then(resolvedValue => {
    console.log('resolvedValue', resolvedValue);
  }) //  => rejected
  .catch(err => {
    console.log('promsie failed: ', err);
  }) //3 => resolved


// thing.then()
fs.readFile('./verse1.txt', 'utf8') //1 => resolved
  .then(fileContents => {
    lyrics.push(fileContents);
    return fs.readFile('./chorus.txt', 'utf8'); // 7 =>resolved
  }) // => returns a promise 2 => resolved
  .then(fileContents => {
    lyrics.push(fileContents);
    return fs.readFile('./verse2.txt', 'utf8'); //8 => resolved
  }) // => returns a promise 3 => resolved
  .then(fileContents => {
    // throw new Error();
    lyrics.push(fileContents);
    return fs.readFile('./chorus.txt', 'utf8');  //9 => resolve
  }) // => returns a promise 4 => resolved
  .then(fileContents => {
    lyrics.push(fileContents);
    for (let lyric of lyrics) {
      console.log(lyric);
    }
  }) // => returns a promise 5 => resolved
  .catch((err) => {
    console.log('something went wrong', err);
    console.log('the lyrics you did get are', lyrics);
  }); // => returns a promise 6 => resolved

  

fs.readFile('./verse1.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log('something went wrong ', err);
  }
  const lyrics = [];
  lyrics.push(data);

  fs.readFile('./chorus.txt', 'utf8', (err, data) => {
    if (err) {
      return console.log('something went wrong ', err);
    }
    lyrics.push(data);

    fs.readFile('./verse2.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log('something went wrong ', err);
      }
      lyrics.push(data);
      
      fs.readFile('./chorus.txt', 'utf8', (err, data) => {
        if (err) {
          return console.log('something went wrong ', err);
        }
        lyrics.push(data);
        console.log("current lyrics", lyrics);
      });
    });
  });
});
