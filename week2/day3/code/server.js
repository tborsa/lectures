const net = require('net');

const server = net.createServer();
const connections = [];
server.on('connection', (conn) => {
  conn.setEncoding('utf8');
  console.log('someone connected');
  connections.push(conn);
  conn.on('data', (data) => {
    console.log(data);
    for (let user of connections) {
      try {
        user.write(data);
      } catch (error) {
        console.log(error);
      }
    }
  });
});


server.listen(1337);
