const db = require("../../db");

const tableNames = require("../../constants/tableNames");

const fields = ["id", "name", "email", "role"];

module.exports = {
  getAllUsers() {
    return db(tableNames.user).select(fields);
  },
  async getUser(id) {
    return db(tableNames.user)
      .select(fields)
      .where({
        id,
      })
      .first();
  },
};
