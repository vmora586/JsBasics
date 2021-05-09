/**
 * create a function which takes two parameters (min, max) and returs an array with all the numbers
 * contained between the two limits
 */

console.log(arrayFromRange(-1, 10));

function arrayFromRange(min, max) {
  let numbers = [];
  for (let num = min; num <= max; num++) {
    numbers.push(num);
  }
  return numbers;
}
