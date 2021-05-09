/**
 * Whit the metod Filter we can apply the same functionality than Every and Some on older
 * browsers
 * Filter method returns a NEW array with all the elements which match the call back function conditions
 */

const numbers = [1, -2, 3, 4];

/**
 * traditional way of writting the call back function
const filteredNumbers = numbers.filter(function (number) {
  return number > 0;
});
*/

//Arrow function way
const filteredNumbers = numbers.filter((n) => n > 0);
console.log(filteredNumbers);
