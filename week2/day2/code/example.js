const higherOrderFunc = function(callback) {
    const data = { initials: "YV" };
  
    console.log('BEFORE TIMEOUT CALL');
    setTimeout(() => {
      data.initials = "YAV";
      callback();
      // as per question 3, what if we return data below? Like so:
      // return data;
    });
  
    console.log('AFTER TIMEOUT CALL');
    // okay, if not in the setTimeout callback above, as per question 3, what if we return data here? So that result below is set to the data. Like so:
    // return data;
  }
  
  console.log('BEFORE MAIN CALL');
  const result = higherOrderFunc(() => {
    console.log('INSIDE CALLBACK');
  })
  console.log('AFTER MAIN CALL');

//Typewriter demo 


const fs = require('fs');

process.stdin.setEncoding('utf8');

console.clear();
console.log("Typewrite sim");

process.stdin.on('data', (data)=>{
    console.clear();
    fs.appendFile('output.txt', data, (err)=>{
        console.log('Ping!');
        setTimeout(()=>{
            console.clear();
        }, 500);
    })
})

process.stdin.on('end', ()=>{
    console.log(' work saved ');
})