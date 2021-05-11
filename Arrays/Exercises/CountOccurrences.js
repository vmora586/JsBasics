/**
 * Create a function which takes as paremeters an Array and a number and then returns the number of
 * times the number is present inside the array.
 * Try to do this method with a simple implementation and once done, try by using the "Reduce" method.
 */

const numbers = [1, 1, 1, 2, 3, 4];
const occurrences = countOccurrences(numbers, 5);
console.log(occurrences);

function countOccurrences(array, searchedValue) {
  /* simplest way
   let occurrences = 0;
  for (let number of array) {
    if (number === value) occurrences++;
  }
   return occurrences;
   */

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchedValue ? 1 : 0;
    return accumulator + occurrence;
  }, 0); // The 0 is the initial value for the accumulator parameter
}
