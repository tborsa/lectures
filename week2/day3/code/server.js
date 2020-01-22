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
