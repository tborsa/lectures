const net = require('net');

const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.resume();

const client = net.createConnection({
  host: '192.168.88.239',
  port: 1337
});

client.setEncoding('utf8');

client.on('connect', () => {
  console.log('I have connected');
  client.write('Whats up gammers!');
});

client.on('data', (data) => {
  console.log(data);
});

stdin.on('data', (data) => {
  if (data === '\\q\n') {
    client.end();
    process.exit();
  }
  client.write(data);
});