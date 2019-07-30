const fs = require('fs');

process.stdin.setEncoding('utf8');
console.clear();
console.log("typewriter sym");
process.stdin.on('data', (data)=>{
    console.clear();
    fs.appendFile('output.js', data, (err)=>{
        console.log("ping!");
        setTimeout(()=>{
            console.clear();
        
        }, 500)
    })
});

process.stdin.on('end', ()=>{
    console.log(' work saved');
})