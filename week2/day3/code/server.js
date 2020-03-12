const net = require('net');

const server = net.createServer();
const PORT = 3000;

const connections = [];

server.on('connection', (conn) => {
  conn.setEncoding('utf8');
  conn.on('data',(msg) => {
    console.log(msg);
    for (let connection of connections) {
      try {
        connection.write(msg);
      } catch (err) {
        console.log('something went wrong', err);
      }
    }
  });
  connections.push(conn);
  console.log("Someone connected");
});

server.listen(PORT);