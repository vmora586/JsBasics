/**
 * Crates a function which takes as paramete an array and returs the biggest values inside.
 * If we pass an empty array the function must return "undefined".
 * Try to implement with simplest way and then by using the reduce method.
 */

const numbers = [1, 2, 3, 4, 5];
console.log(getMax(numbers));

function getMax(array) {
  if (array.length == 0) return undefined;

  /* traditional approach
   let max = 0;
 
  for (let value of array) if (value > max) max = value;
  return max;
  */

  //Reduce method approach
  return array.reduce((a, b) => (a > b ? a : b));
}
