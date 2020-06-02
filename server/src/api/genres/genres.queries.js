const db = require('../../db');

const tableNames = require('../../constants/tableNames');

const fields = ['id', 'title'];

module.exports = {
  getAllGenres() {
    return db(tableNames.genre).select(fields);
  },

  async getGenre(id) {
    return db(tableNames.genre)
      .select(fields)
      .where({
        id,
      }).first();
  },

  async createGenre(title){
    return db(tableNames.genre)
    .returning(fields)
    .insert({
      title
    })
  }
};
