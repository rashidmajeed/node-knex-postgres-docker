const express = require('express');

const queries = require('./users.queries');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await queries.getAllUsers();
  res.json(users);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    // TODO: should we validate the ID?
    const user = await queries.getUser(parseInt(id, 10) || 0);
    if (user) {
      return res.json(user);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});


module.exports = router;
