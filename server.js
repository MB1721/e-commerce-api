const env = require('dotenv').config();
const db = require('./db/connect.js');
const express = require('express');
const server = express();

const PORT = process.env.API_PORT;

server.listen(PORT, () => {
  console.clear();
  console.log(`Listening to server on ${PORT}`);
  console.log(db);
});