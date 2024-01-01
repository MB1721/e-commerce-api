const express = require('express');
const usersRouter = express.Router();
const db = require('../db/index.js');

usersRouter.get('/', async(req, res, next) => {
  try {
    const client = await db.connect();
    const users = await client.query('SELECT * FROM customers');
    res.json({response: users.rows});
    client.release();
  } catch (err) { res.status(500).send(err); }
});

module.exports = usersRouter;