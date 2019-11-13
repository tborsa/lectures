const pg = require('pg');
const Client = pg.Client;
require('dotenv').config();

const client = new Client({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER
});

client.connect(() => {
  console.log('Connected to the database');
});

module.exports = client;