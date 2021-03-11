require('dotenv').config();

const config = {
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB: process.env.DB,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
};

module.exports = config;
