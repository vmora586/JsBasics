/**
 * Map method allows us to return some to map each item in an array to something else. This method
 * is also allowed on MODERN browser versions!!!!
 */

//first excersise: take all the values from the filtered array an create a <UL><li>n</li></UL> structure.
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.filter((n) => n > 0);
const list = filteredNumbers.map((n) => "<li>" + n + "</li>");
const htmlList = "<ul>" + list.join("") + "</ul>";
console.log(htmlList);

//there is a tricky part here. Map method works perfectly fine with call back functions for mapping the values
//when we are working with value types. When working with reference types (objects), we can not use
//the same notation. Look:

/*
const positiveObjects = numbers.map((n) => {
  value: n;
});  in this way it will return an array with [undefined, undefined, undefined, undefined];
* */

//when using arrow functions and objects, it is mandatory put object intialization inside parenthesis.
const positiveObjects = filteredNumbers.map((n) => ({ value: n }));
console.log(positiveObjects);

/**
 * Additionally, there is more elegance way of writting the above code. This approach is called "chaining" methods
 * We can "chaing" one call method after another.
 */

const items = numbers.filter((n) => n > 0).map((n) => ({ value: n }));

console.log(items);
