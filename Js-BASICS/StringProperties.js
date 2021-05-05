const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(object) {
  for (let key in object) {
    if (typeof object[key] === "string") console.log(key, object[key]);
  }
}
