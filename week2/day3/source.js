const net = require('net');

const server = net.createServer();

const connections = [];

// WHEN SOMEONE CONNECTS
server.on('connection', (conn) => {
    conn.setEncoding('utf8')
    connections.push(conn)
    // HERE I HAVE ACCESS TO THAT PERSON (conn)
    console.log('NEW CONNECTION')

    conn.on('data', (data) => {
        console.log('NEW DATA', data)

        for (const user of connections) {
            user.write(data)
        }
    })

})

server.listen(1337);

//=======================================>

const net = require('net');
const stdin = process.stdin
stdin.resume()

// interpret incoming data as text
stdin.setEncoding('utf8'); 


const client = net.createConnection({
    host: '192.168.88.211',
    port: 1337
})

client.setEncoding('utf8');

stdin.on('data', data => {
    if (data === '\\q\n') {
      client.end();
      process.exit();
    } // \q quitting

    client.write(data)
})


client.on('connect', () => {
    client.write('Hello world!')
})

client.on('data', (data) => {
    console.log(data)
})


//================================================================>
//http client 

// using request package to send requests. 
var request = require('request');

//before we had used http and had to parse the chunks
var getSWCharacter = function(person, callback){
    request({
        url: `https://swapi.co/api/people/${person}/`,
    }, function(error, response, body) {
        console.log(response.headers);
        var issues = JSON.parse(body);
        callback(issues);
    });
}

// show the resulting code
getSWCharacter(1, function(issues){
    console.log(issues);
});

//have to add the correct agent header for the request to work
headers: {
    'user-agent': 'node application'
}

// Format response output so that it is nicer to read
// call functoin with new format callback
var formatCharacter = function(character){
    console.log(`Name: ${name }`);
    console.log(`Eye color: ${character.eye_color }`);
    console.log(`Gender: ${character.gender }`);
}


getSWCharacter(1, formatCharacter);
