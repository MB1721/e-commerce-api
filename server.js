const env = require('dotenv').config();
const db = require('./db/connect.js');
const express = require('express');
const server = express();

const PORT = process.env.API_PORT;

async function confirmConnection() {
  const client = await db.connect(); // create new client
  
  const result = await client.query('SELECT NOW()'); // get current time
  const time = result.rows[0].now;
  
  console.log(`Established connection to ${client.database}`);
  console.log(`Listening to server on ${PORT}`);
  
  client.release(); // return client to pool
}

server.listen(PORT, () => {
  console.clear();
  confirmConnection();
});

/*server.on('close', () => {
  console.log('Closing');
})*/