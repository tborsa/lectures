const pg = require('pg');
const Client = pg.Client;
require('dotenv').config();

const client = new Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME
});

client.connect(()=>{
  console.log('connected to the pokedex database');
});

module.exports = client;