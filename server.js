const env = require('dotenv').config();
const db = require('./db/connect.js');
const express = require('express');
const server = express();

const PORT = process.env.API_PORT;

async function confirmConnection() {
  const client = await db.connect(); // create new client
  
  const result = await client.query('SELECT NOW()'); // get current time
  const time = result.rows[0].now;
  
  console.log(`\nEstablished connection to ${client.database}`);
  console.log(`Listening to server on ${PORT}`);
  
  client.release(); // return client to pool
}

server.listen(PORT, () => {
  console.clear();
  confirmConnection();
});

// Gracefully handle server shutdown
process.on('SIGINT', () => {
  console.log('\n\nShutting down the server:\n\n\tDisconnecting the database pool...');
  db.end();
  
  process.exit(0);
});