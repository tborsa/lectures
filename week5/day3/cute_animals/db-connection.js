const { Client }  = require('pg');
require('dotenv').config();

const connection = new Client({
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST
});

connection.connect(() => {
  console.log('Connected to DB ', process.env.DATABASE_NAME);
})

module.exports = connection;