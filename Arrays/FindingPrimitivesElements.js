/**
 * Looking for primitive elements inside an arry is pretty easy by using the IndexOf method.
 * This metod returns the index in the array in which the specified element is located. If not,
 * the result will be -1. Please notice that the type of the value sent does matter.
 */

const numbers = [1, 2, 3, 4];
console.log(numbers.indexOf("a")); //returns -1
console.log(numbers.indexOf(4)); // returns 3. If you pass '3' it will return -1.

console.log(numbers.indexOf(1) !== -1); //prints true.
console.log(numbers.includes(1)); //This method is the newest version of index of!
