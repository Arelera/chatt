const { Pool } = require('pg');
const { DB, DB_HOST, DB_USER, DB_PASS, DB_PORT } = require('./config');

const client = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB,
  port: DB_PORT,
});

module.exports = client;
