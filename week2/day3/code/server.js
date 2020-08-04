const net = require('net');
const request = require('request');

const server = net.createServer();

// I/O

const connections = [];

server.on('connection', (conn) => {
  conn.setEncoding('utf8');
  connections.push(conn);
  conn.on('data', (data) => {
    console.log(data);
    for (let connection of connections) {
      connection.write(data);
    }
  });
  conn.write("You have connected to the super secret chat server.");
  console.log("Someone has connected");
});

const port = 1337;

console.log("listening on port " + port);
server.listen(port);