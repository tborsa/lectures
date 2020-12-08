const net = require('net');
const stdin = process.stdin;

stdin.setEncoding('utf8');
stdin.resume();

const client = net.createConnection({
  host: "0.tcp.ngrok.io",
  port: 10969
});

client.setEncoding('utf8');

client.on('connect', () => {
  console.log('I connected to the server');
  client.write('hello this is travis');
})

client.on('data', (data) => {
  console.log('-> ', data);
})

stdin.on('data', (data) =>{
  client.write(data);
})