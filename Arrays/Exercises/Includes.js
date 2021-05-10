/**
 * Create a function which emulates include() verb behaviour. This method takes as parameters an array and a value
 * to search for.
 */

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 7));

function includes(numbers, searchElement) {
  for (let value of numbers) {
    if (value === searchElement) return true;
  }
  return false;
}
