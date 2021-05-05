/**
 * for this case we are going to use the 'find' method what we used in the previous lection.
 * When working when Reference types, this method takes as a parameter a function. The find method will return
 * the first element that matches the search criteria. If it does not  mathc any elment,
 *  it will returns undefined.
 */

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

let course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);

//We have also the findIndex method, wich returns the index of the first element that matches
//with the search criteria.
