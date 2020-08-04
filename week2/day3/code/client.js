const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');

const client = net.createConnection({
  host: '0.tcp.ngrok.io',
  port: 11722
});

client.setEncoding('utf8');

client.on('connect', () => {
  stdin.on('data', data =>{
    client.write(data);
  });
});

client.on('data', (data) => {
  console.log(data);
});