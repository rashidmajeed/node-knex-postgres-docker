const bcrypt = require('bcrypt');
const Knex = require('knex');

const tableNames = require('../../src/constants/tableNames');

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all(Object
    .keys(tableNames)
    .map((name) => knex(name).del()));


    // Seed Uer entry
    const users = [
    { email: 'admin@fullstackapp.com', name: 'Rashid', role: 'admin', password: '123@abc'},
    { email: 'moderator@fullstackapp.com', name: 'James', role: 'moderator', password: 'xp_GfkH4'},
    { email: 'guest@fullstackapp.com', name: 'Valentina', role: 'guest', password: 'xp_7877gdd'}
    ];

  // Genre Seed Genre
  const genres = [
    {title:"Adventure"},
    {title:"Fantasy"},
    {title:"Comedy"},
    {title:"Romantic"},
    {title:"Horror"}
  ]

 // Genre Seed Movies
  const movies = [
    {genre_id: 1, name: "Titanic", releaseYear: "1992", description:"best movie", img_Url:"Xhttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB0XqNReP1rwuIya0nqb3OechzfrQweL0F7qxplGNzgoAM7Y4D&usqp=CAU", rating:"4.8"},
    {genre_id: 2, name: "Harry Potter", releaseYear: "2001", description:"best movie", img_Url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZpel5iofyEWSWEDGCxUthF7SNxgGGVEJN2sig5c0kovbKlYMs&usqp=CAU", rating:"4.9"},
    {genre_id: 3, name: "Charlie's Angels", releaseYear: "2000", description:"best movie", img_Url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbnHwlIgDGzIdYFqFWyYiVaYUAAuid47CArBmcYyYPfMtXdukw&usqp=CAU", rating:"4.5"},
    {genre_id: 4, name: "Taxas Charm", releaseYear: "2000", description:"best movie", img_Url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ8Etvrvt_eG2XHvJWOgeXrruozlViYNAjq4C7f3b7p4L3oi63&usqp=CAU", rating:"4.6"},
    {genre_id: 5, name: "Evil Dead", releaseYear: "2018", description:"best movie", img_Url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1QeGJPqax7KK241qrT4fMYs6xbz3gIVtj2wEslJ1-GQqvc8LJ&usqp=CAU", rating:"4.9"},
  ]

  // Inserting user with hashed password into database table
  for (user of users) {
  user.password_hash = await bcrypt.hash(user.password);
  }
  await knex(tableNames.user)
    .insert(users.map(({
      password, ...rest
    }) => rest));

  // Inserting genres 
  await knex(tableNames.genre)
    .insert(genres);
 // Inserting genres 
 await knex(tableNames.movie)
 .insert(movies);

}

