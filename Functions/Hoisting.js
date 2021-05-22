/**
 * Hoisting is the process of moving all the functions declaration to the top of
 * the file. This is done by the javaScritp engine automatically on run time.
 * Because of that, you can call a function which is declared with the Funcition Declaration
 * approach, and it will work. However, it wont work with the ones which has been created
 * by using the "Function Expression" approach.
 */

Move(); //this will run with out probles as the Hoisting.
function Move() {
  console.log("move");
}

walk(); //this will throw an exception.
const walk = function () {
  console.log("walk");
};
