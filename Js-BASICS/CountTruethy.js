/**
 * Trurthy values are those wich java script engine threats as true, despite of they are not
 * const name='john' if(name) --> this statement returns true.
 * Falsy values are the opposite to truethy.
 * Empty strings ''
 * null
 * undefined
 * 0
 * Nan
 */

const values = ["", null, false, 1, 2, 3];
console.log(countTruethy(values));

function countTruethy(array) {
  let count = 0;

  for (let value of array) {
    if (value) count++;
  }

  return count;
}
