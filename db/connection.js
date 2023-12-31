const db = require('./index.js');

async function confirmDatabaseConnection() {
  const client = await db.connect(); // create new client
  
  const result = await client.query('SELECT NOW()'); // get current time
  const time = result.rows[0].now;
  
  console.log(`\n${time}:\nEstablished connection to ${client.database}`);
  
  client.release(); // return client to pool
}

function disconnectDatabase() {
  console.log('\n...Disconnecting the database pool.');
  db.end(); // disconnect database pool
}

module.exports = {confirmDatabaseConnection, disconnectDatabase};