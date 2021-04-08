const fs = require('fs').promises;

const lyrics = [];
lyrics.push(data);

// syntatic sugar

// disguising something old as a new thing

fs.readFile('./chorus.txt', 'utf8')
    .then((data) => { //second
        lyrics.push(data);
        return fs.readFile('./verse1.txt', 'utf8');
    })
    .then((data) => { //second
        lyrics.push(data);
        return fs.readFile('./chorus.txt', 'utf8');
    })
    .then((data) => { //second
        lyrics.push(data);
        return fs.readFile('./verse2.txt', 'utf8');
    })
    .then((data) => { //second
        lyrics.push(data);
        return fs.readFile('./chorus.txt', 'utf8');
    })
    .then((data) => {
        lyrics.push(data);
        console.log(lyrics);
    })
