/**
 * creates a fuction which takes as parameters two array. One of them with all the values and the second one
 * with the elements we want to exclude from it.
 */

const numbers = [1, 2, 3, 4, 5, 6, 1, 1];
const excluded = [1, 2, 3, 4];

console.log(excludes(numbers, excluded));

function excludes(numbers, excluded) {
  let output = [];

  for (let value of numbers) {
    if (!excluded.includes(value)) output.push(value);
  }
  return output;
}
