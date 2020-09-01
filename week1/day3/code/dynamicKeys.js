let books = {fantasy: {"Patrick Rothfuss": "Name of the wind", "Tolkein": "The Fellowship of the Ring"}, "sci-fi": "Hyperion", "non-fiction": "The dragons of Eden"};

const userInput = process.argv[2];


const pet = {name: 'roofus', age: 5, petDOBandLastAppointment: {}};

console.log(`You should read`,  books[userInput]);