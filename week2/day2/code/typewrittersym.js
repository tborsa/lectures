const fs = require('fs');
//event emitter 
// event.emit('data', callback())

// event listener
console.clear();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('Typewritter Sym');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

process.stdin.setEncoding('utf8');

let time = Date.now();

process.stdin.on('data', (data) => {
  let timeTyping = Date.now() - time;
  let words = data.split(' ');
  let wpm = Math.round(words.length/(timeTyping/1000/60) * 100) /100;
  console.clear();
  console.log('Ping! wpm is:', wpm);
  console.log("\007");
  fs.appendFile('story.txt', data, (err) => {
    if (err) {
      console.log('something went wrong');
    } else {
      setTimeout(() => {
        console.clear();
        time = Date.now();
      }, 500);
    }
  })
})