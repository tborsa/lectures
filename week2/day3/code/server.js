const net = require('net');
const PORT = 3000;
const server = net.createServer();

const connections = [];

server.on('connection', (connection) => {
  console.log("someone connected");
  connections.push(connection);
  connection.setEncoding('utf8');
  connection.on('data', (data) => {
    // message from client recieved
    console.log( data);
    for (let conn of connections) {
      if (conn.writable) {
        conn.write(data);
      }
    }
  });
});

server.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});