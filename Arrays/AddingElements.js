/**
 * arrays on js are objects. Because of that cons modifier does not affect them. You can add or remove
 * elements from them, even if they are marked as constants
 */

const numbers = [3, 4];

//there are three methods for adding or modifiyng items into an array.

//End: The Push method adds items at the end of the array.
numbers.push(5, 6);

//Begining: Unsfhit method puts elements at the begining of an array.
numbers.unshift(1, 2);

//Middle. Splice method inserts elements starting by the index idicated, then remove the as much items as set,
//andl finaly inserts the items (2,0,'a','b'). Starts at index two, remove 0 elements and finally adds 'a' and 'b'
//characters.

numbers.splice(2, 0, "a", "b");
console.log(numbers);
