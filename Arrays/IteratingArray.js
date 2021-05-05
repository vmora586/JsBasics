/**
 * We have several different way for iterating an array on ES6.
 */

const numbers = [1, 2, 3, 4];

//by using For of method
for (let number of numbers) console.log(number);

//by using a the Foreach method and a call back function
numbers.forEach(function (number) {
  console.log(number);
});

//By using the same approach but with Arrow Function
numbers.forEach((number, index) => console.log(index, number));
