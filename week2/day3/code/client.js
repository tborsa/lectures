const net = require('net');

const stdin = process.stdin;

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', (data) => {
  if(data === '\\q\n'){
    client.end();
    process.exit();
  } else {
    client.write(data);
  }
})

const client = net.createConnection({
  host: "2.tcp.ngrok.io",
  port: "13038"
});

client.setEncoding('utf8');

client.on('connect', () => {
  console.log("connected to server");
  client.write('Hey this is travis');
});

client.on('data', (data) => {
  console.log(data);
})