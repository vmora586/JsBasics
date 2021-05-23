/**
 * When working with a funcition "arguments" property, we can work with the
 * "Rest" (...) operator. This operator is completly exactly equal to the
 * "Spread" operator. This operator allow us work with the "arguments" property
 * in a easier way.
 */

//traditional way of doing this...
function sumArgumentsTraditionalWay() {
  let total = 0;
  for (argument of arguments) total += argument;
  return total;
}

console.log(sumArgumentsTraditionalWay(1, 2, 3, 4, 5));

//by using the Rest operator
function sumArgumentsUsingRestOperator(...args) {
  //when we use Rest operator along with function arguments, it converts all the arguments
  //into an array.
  console.log(args);
  return args.reduce((a, b) => a + b);
}

console.log(sumArgumentsUsingRestOperator(1, 2, 3, 4, 5));

/**
 * let us take the previous example to the next level. Try to create a function which takes
 * an array of articles an an discount percentaje, and returns the articles price with the
 * discount.
 */

console.log(calculateDiscount(0.1, 10, 40));

function calculateDiscount(discount, ...args) {
  //the argument marked with the ... operator has to be the last one.zze
  const total = args.reduce((a, b) => a + b);
  return total * (1 - discount);
}
