const express = require('express');

const queries = require('./movies.queries');

const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await queries.getAllMovies();
  res.json(movies);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    // TODO: should we validate the ID?
    const movie = await queries.getMovie(parseInt(id, 10) || 0);
    if (movie) {
      return res.json(movie);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});


module.exports = router;
