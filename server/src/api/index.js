const express = require('express');
const project = require('../constants/project');


const users = require('./users/users.routes');
const genres = require('./genres/genres.routes');
const movies = require('./movies/movies.routes');


const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: project.message,
  });
});

router.use('/users', users);
router.use('/genres', genres);
router.use('/movies', movies);

module.exports = router;
