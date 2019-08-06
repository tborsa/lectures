// new pages are seperate files
// give user input for what book to work on 

const fs = require('fs');
process.stdin.setEncoding('utf8');

console.clear();
console.log("~~TypeWriter Sim~~");

process.stdin.on('data', function(data){
    console.clear();
    fs.appendFile('thesequel.txt', data, function(){
        console.log("Ding!")
        console.log('\u0007');
        setTimeout(function(){
            console.clear();
        }, 500);
    })
})

process.stdin.on('end', function(){
    console.log("workd saved!")
})