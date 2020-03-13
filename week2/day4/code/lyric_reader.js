const fs = require('fs');

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
