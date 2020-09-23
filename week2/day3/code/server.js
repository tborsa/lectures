const net = require('net');

const server = net.createServer();

const port = 8080;

const clients = [];

server.on('listening', () => {
  console.log("Tcp server listening on port:", port);
});

server.on('connection', (connection) => {
  // this callback is run on a connection
  clients.push(connection);
  console.log('someone connected');
  connection.setEncoding('utf8');
  connection.on('data', (data) => {
    console.log("incomming:" , data);
    // forward this info to users
    for (let client of clients) {
      try {
        client.write(data);
      } catch (error) {
        // bad stuff
      }
    }
  });

});

server.listen(port);
