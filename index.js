const env = require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { confirmDatabaseConnection, disconnectDatabase} = require('./db/connection.js');

// routers
const checkoutRouter = require('./routes/checkout.js');
const homeRouter = require('./routes/home.js');
const inventoryRouter = require('./routes/inventory.js');
const profileRouter = require('./routes/profile.js');
const usersRouter = require('./routes/users.js');

// set up app
app.use(bodyParser.json());

// set up routes
app.use('/home', homeRouter);
app.use('/profile', profileRouter);
app.use('/inventory', inventoryRouter);
app.use('/checkout', checkoutRouter);
app.use('/users', usersRouter);

// customer registration
app.get('/', async(req, res, next) => {
  res.json({'message': 'Welcome to the e-commerce api! Please login to start shopping.'})
});

// set up server
const PORT = process.env.API_PORT;

app.listen(PORT, () => {
  console.clear();
  console.log(`Listening to server on ${PORT}`);
  confirmDatabaseConnection();
});

// Gracefully handle server shutdown
process.on('SIGINT', () => {
  console.log('\n\nShutting down the server:');
  
  disconnectDatabase();
  process.exit(0);
});