const fs = require('fs');

let finalDoc = [];

fs.readFile("data/p1.txt", "utf8", (err, data) => {
  // runs a few ms after readFile returns
  if (err) {
    return console.log('FAILED ON FILE 1');
  }
  console.log('SUCCESS!', data);
  finalDoc.push(data);
  fs.readFile("data/p2.txt", "utf8", (err, data) => {
    if (err) { 
      return console.log('FAILED ON FILE 2');
    }
    finalDoc.push(data);
    console.log(finalDoc);
    fs.readFile("data/p.txt", "utf8", (err, data) => {
      if (err) { 
        return console.log('FAILED ON FILE 3');
      }
      finalDoc.push(data);
      fs.readFile("data/p4.txt", "utf8", (err, data) => {
        if (err) { 
          return console.log('FAILED ON FILE 4');
        }
        finalDoc.push(data);
        console.log(finalDoc);
      })
    })
  })
});

console.log(finalDoc);

//Promise version=========================================

// Let's solve it again using promises!

const fs = require('fs').promises;

// console.log(fs);

// Reads all of the 4 files and returns a promise
const readFourAgileFiles = function(done) { 
  let finalDoc = [];

  const p1 = fs.readFile("data/p1.txt", "utf8");
  
  return p1
    .then((data1) => {
      console.log('data1 is: ', data1);
      finalDoc.push(data1);
      return fs.readFile("data/p2.txt", "utf8");
    })
    .then((data2) => {
      console.log('data2 is: ', data2); // p2 text
      finalDoc.push(data2); 
      return fs.readFile("data/p3.txt", "utf8");
    })
    .then((data3) => {
      console.log('data3 is: ', data3); // p3 text
      finalDoc.push(data3); 
      return fs.readFile("data/p4.txt", "utf8");
    })
    .then((data4) => {
      console.log('data4 is: ', data4); // p4 text
      finalDoc.push(data4); 
      // console.log('DONE, finalDoc is: ', finalDoc);
      return finalDoc;
      // return finalDoc;
    });
}