/**
 * there are two ways of declaring a funciont on Js. The traditional approach (Declaration) and by
 * asigning the function to a variable (Expression)
 */

//functin declaration. In this way the semicolon at the end is not required
function walk() {
  console.log("walk");
}

//calling the original approach
walk();

// function expression (we do use semicolon)
let move = function move() {
  console.log("move");
};

//for calling this kind of functions we use next sintax
move();

//we can also assing its value to another variable
run = move;
run();

//Besides this can be called on anymous way, giving an anonymous function
let anonymousMove = function () {
  console.log("anonymous move");
};

anonymousMove();
