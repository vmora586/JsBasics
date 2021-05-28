/**
 *Creates a function which takes any number of parameters and returns the summatory of 
 these. Once done ,try to challenge your selfe and give the function of acepting an array
 as parameter and sum the elements of this. For doing that, take into account the function
 Array.isArray()
 */

console.log(sum(1, 2, 3, 4));

function sum(...items) {
  if (items.length === 1 && Array.isArray(items)) items = items[0]; //taking only the values itself.

  return items.reduce((a, b) => a + b);
}
