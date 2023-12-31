require('dotenv').config(); // Load environment variables from .env into process.env

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;