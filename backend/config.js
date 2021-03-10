require('dotenv').config();

const config = {
  DB_NAME: process.env.DB_NAME,
  DB_PASS: process.env.DB_PASS,
  DB: process.env.DB,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
};

module.exports = config;
