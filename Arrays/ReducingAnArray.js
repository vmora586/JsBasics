/**
 * The Reduce method is used to "reduce" all the elements of an array in single element. This method takes
 * a call back function with two parameters (accumalator, currenValue). It takes an additional parameter
 * which indicates the inital value for the accumulator, but that is optional.
 */

const numbers = [1, -1, 3, 4];

//old way way of doing
let total = 0;

for (let value of numbers) {
  total += value;
}

console.log(total);

//by using reduce method
const sum = numbers.reduce(
  (accumalator, currentValue) => accumalator + currentValue
);

console.log(sum);
