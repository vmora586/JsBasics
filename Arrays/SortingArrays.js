/**
 * for soting arrays we can easily use the Sort (ascending way) or Revert(descending way) methods. However, this
 * will work only with value types. If we are working with reference types, we must pass a call back fucntion
 */

const numbers = [3, 1, 2];
const sorted = numbers.sort();
console.log(sorted);

const reverted = numbers.reverse();
console.log(reverted);

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

courses.sort(function (a, b) {
  //a < b => -1
  //a > b => 1
  //a === b => 0
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
