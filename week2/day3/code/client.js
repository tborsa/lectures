const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.resume();


const client = net.createConnection({
  host: '192.168.88.188',
  port: 3000
});

stdin.on('data', (data) => {
  if (data === '\\q\n') {
    client.end();
    process.exit();
  }
  client.write(data);
});

client.setEncoding('utf8');

client.on('connect', () => {
  console.log('connected');
  client.write(`Hey it's me travis`);
});

client.on('data', (data) => {
  console.log(data);
});