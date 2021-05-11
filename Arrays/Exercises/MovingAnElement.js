/**
 * Creates a function which takes as parameters an array, and two integers. The firs integers
 * indicates the index of an elment inside the array, the second one denotes the offset (how many positions
 * you want to move the value located in the index). If the index is not valid or if you want to move
 * an element to a not valid offset, it must throws an exception. Take into account that the function
 * must return a new array.
 */

const numbers = [1, 2, 3, 4];
const output = move(numbers, 3, -1);
console.log(output);

//move (numbers, 0, 2) the function will move the value numbers[0] (1) two positions to the right.
function move(array, index, offset) {
  const position = index + offset;

  if (position < 0 || position >= array.length) {
    console.error("Not Valid Offset");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0]; //Splice returns an arary with all removed elements
  output.splice(position, 0, element); // Splice method also add elements if the second parameter is <=0
  return output;
}
