const Knex = require("knex");

const tableNames = require("../../src/constants/tableNames");
const { addDefaultColumns, references } = require("../../src/lib/tableUtils");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.genre, (table) => {
      table.increments().notNullable();
      table.string("title").notNullable().unique();
      addDefaultColumns(table);
    }),
 
    knex.schema.createTable(tableNames.user, (table) => {
      table.increments().notNullable();
      table.string("email", 254).notNullable().unique();
      table.string("name").notNullable();
      table.string("role").notNullable().unique();
      table.string("password_hash", 127).notNullable();
      addDefaultColumns(table);
    }),
  ]);

  await knex.schema.createTable(tableNames.movie, (table) => {
    table.increments().notNullable();
    table.string("name").notNullable().unique();
    table.string("releaseYear").notNullable();
    table.string("description");
    table.string("img_Url");
    table.string("rating");
    references(table, tableNames.genre);
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  
  await knex.schema.table(tableNames.movie, (table) => {
    table.dropColumn("genre_id");
  });

  await Promise.all(
    [tableNames.user, tableNames.genre, tableNames.movie]
      .reverse()
      .map((tableName) => knex.schema.dropTableIfExists(tableName))
  );
};
