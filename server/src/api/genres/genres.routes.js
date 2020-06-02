const express = require('express');

const queries = require('./genres.queries');

const router = express.Router();

router.get('/', async (req, res) => {
  const genres = await queries.getAllGenres();
  res.json(genres);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    // TODO: should we validate the ID?
    const genre = await queries.getGenre(parseInt(id, 10) || 0);
    if (genre) {
      return res.json(genre);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});


module.exports = router;
