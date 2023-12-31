const env = require('dotenv').config().parsed;
const express = require('express');
const server = express();

const PORT = env.API_PORT;

server.listen(PORT, () => {
  console.clear();
  console.log(`Listening to server on ${PORT}`);
});