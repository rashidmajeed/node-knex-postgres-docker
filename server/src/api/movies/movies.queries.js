const db = require('../../db');

const tableNames = require('../../constants/tableNames');

const fields = ['id', 'name', 'releaseYear', 'description', 'img_Url', 'rating',];

module.exports = {
  
  getAllMovies() {
    return db(tableNames.movie).select(fields);
  },
  async getMovie(id) {
    return db(tableNames.movie)
      .select(fields)
      .where({
        id,
      }).first();
  },
  async createMovie(
    id, name, releaseYear, description, img_Url, rating
    ){
    return db(tableNames.genre)
    .returning(fields)
    .insert({
      name,
      releaseYear,
      description,
      img_Url,
      rating,
      genre_id: id
    })
  }

};
