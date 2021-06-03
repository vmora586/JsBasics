/**
 * Create a function which takes as paremeters an Array and a number and then returns the number of
 * times the number is present inside the array.
 * Additionally, add an error handling module in case the first parameter sent to the functions
 * is not a valid array.
 */

function countOcurrences(items, foundNumber) {
  return items.reduce((accumulator, currentValue) => {
    const ocurrence = currentValue === foundNumber ? 1 : 0;
    return accumulator + ocurrence;
  }, 0);
}

try {
  console.log(countOcurrences(undefined, 3));
} catch (e) {
  alert(e);
}
