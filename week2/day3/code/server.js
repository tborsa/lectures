const net = require('net');
const PORT = 3000;

const server = net.createServer();

const connections = [];
server.on('connection', (conn) => {
  // everytime someone connects to the server
  console.log('Someone connected.');
  conn.setEncoding('utf8');
  // add the connection to our connections array

  connections.push(conn);

  conn.on('data', (data) => {
    console.log('->', data);
    // forward this data to all the connections
    for (let connection of connections) {
      try {
        connection.write(data);
      } catch (err) {
        // recover from the error
        // console.log('someone disconnected');
      }
    }
  });
});

server.listen(PORT, () =>{
  console.log(`server is listening on port: ${PORT}`);
});