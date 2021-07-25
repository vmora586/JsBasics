/**
 * Hoisiting is the process used for JS engine for setting up on the top all the functions inside one
 * file or class, as long as the functions have been created by using function declaration
 */

greet(); //despite of the method is called before its initialization, it is going to work as the Hositing.

//Function Declaration
function greet() {
  console.log("greet");
}

console.log(p); //this will throw an exception as the function is assgined to a variable wich does not exists yet

//Function Expression
const p = function print() {
  return "print";
};

//We can use the same approach with the classes.
