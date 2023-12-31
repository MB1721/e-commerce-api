const express = require('express');
const db = require('../db/connect.js');

const homeRouter = express.Router();


homeRouter.get('/', (req, res, next) => {
  const homeContent = {
    content:  'This is home content.'
  };
  res.json(homeContent);
});

module.exports = homeRouter;