/**
 * You can empty an array by different ways. However, most recommended are by assigning the array to a new empty
 * array (it will not work if the array has multiple references), or by setting its lenght property to zero.
 */

let numbers = [1, 2, 3, 4];

//adding an additional reference
other = numbers;

//trying to empty
numbers = []; //this approach works only if original array does not have additonal references.

console.log(numbers); //empty
console.log(other); //original values

const values = ["a", "b", "c"];
const values2 = values;
values.length = 0; //this empty the array an all its references.
console.log(values);
console.log(values2);
