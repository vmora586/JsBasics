/**
 * In modern java script we have two new methods for testing the element of an array.
 * Every and Some
 * Every will return a boolean value if all the elements of the array matchs the condition
 * set inside the Call Back function what it takes as parameter. If it finds any value which does not mathc
 * the function criteria, it will returns the answer whit out iterating over the rest array elements.
 */

//Every Method()
const numbers = [1, -2, 3, 4];

const allPositive = numbers.every((number) => {
  return number > 0;
});

console.log(allPositive);

/**
 * Some method will return a boolean value if at least one of the elements matches the call back function
 * criteria.
 */

const atleastOneNegative = numbers.some((number) => {
  return number < 0;
});

console.log(atleastOneNegative);
