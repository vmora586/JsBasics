/**
 * Since the ES 6 we can use Arrow Functions, whenever we are using a function as a call back function.
 * It means, when we are passing a function as argument to a different method. In this way, we can remove
 * the key word "return", then for separating the parameters from the method's body let us use a '=>'.
 * Additionally to this, we can suppress the () if we are not going to pass parameters.
 * Finally, we can remove the {}.
 */

const courses = [
  { id: 1, name: "a" },
  { id: 1, name: "b" },
];

//old way
let course = courses.find(function (course) {
  return course.name === "a";
});

//equivalize to
let course2 = courses.find((course) => course.name === "a");

console.log(course2);
