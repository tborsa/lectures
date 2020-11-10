const net = require('net');

const server = net.createServer();

const PORT = 3000;

const connections = [];

server.on('listening', () => {
  console.log('listenting on', PORT);
});

server.on('connection', (conn) => {
  conn.setEncoding('utf8');
  console.log('someone connected');
  connections.push(conn);
  conn.on('data', (data) => {
    console.log('message:', data);
    for (let user of connections) {
      if (user.writable){
        user.write(data);
      }
    }
  })
})

server.listen(PORT);