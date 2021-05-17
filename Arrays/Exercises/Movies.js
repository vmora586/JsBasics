/**
 * choose all the movies in 2018 with rating > 4
 * Sort them by their rating
 * Descending order
 * Pick their title
 * result should be b,c
 */

let movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.8 },
  { title: "c", year: 2018, rating: 3.2 },
  { title: "d", year: 2017, rating: 4.7 },
];

const response = movies
  .filter((m) => m.year === 2018 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(response);
