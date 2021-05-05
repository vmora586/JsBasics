/**
 * As when adding elements, yor can remove from the begining, middle and the end of an array.
 */

const numbers = [1, 2, 3, 4, 5];
console.log("original values: ", numbers);

//End: by using POP method
const last = numbers.pop();
console.log(last);
console.log("remanining values: ", numbers);

//Middle. By using Slice method (start index, number of elements to remove).
const middle = numbers.splice(1, 1);
console.log(middle);
console.log("remanining values: ", numbers);

//Begining. By using the POP method.
const first = numbers.shift();
console.log(first);
console.log("remanining values: ", numbers);
