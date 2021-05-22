/**
 * As java script function is a dynamic language, function arguments are so.
 * This means, you can modifiy the quantity an type of parameter a function takes
 * when calling it.
 */

function sum(a, b) {
  return a + b;
}
//this will print 3
console.log(sum(1, 2));

//this will print Not a number (NaN)
console.log(sum(1, undefined));

//this will print 3, because the function will take just the two first parameters
console.log(sum(1, 2, 3, 4, 5, 10));

/**
 * Besides this, all functions have an object called "arguments". Inside this are contained
 * all the parameters that the function gets.
 */

function argumentsShown(a, b) {
  console.log(arguments);
}

argumentsShown(1, 2);
