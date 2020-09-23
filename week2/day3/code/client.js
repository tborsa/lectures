const net = require('net');
const stdin = process.stdin;

stdin.setEncoding('utf8');
stdin.resume();

const client = net.createConnection({
  host: "2.tcp.ngrok.io",
  port: 16543
});

stdin.on('data', (data) => {
  if (data === '\\q\n') {
    process.exit();
  }
  client.write(data);
});

client.setEncoding('utf8');

client.on('connect', () => {
  // when a connection is established
  console.log("successfully connected to server");
  client.write('hello this travis');
});

client.on('data', (data) => {
  console.log(`Incomming: ${data}`);
});