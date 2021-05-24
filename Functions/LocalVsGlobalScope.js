/**
 * Variables and constants have an specific scope, depending on what part of the code the are declared.
 * Those ones which are declared inside a code block (if statement or function) have a "local" scope.
 * Than means they can not be accessed from out side the block the were defined. In the other hand,
 * the ones what are declared outside any code block, are considered "Global". That means they can be
 * accessed from anywhere in the code. Declaring "Global" variables is considered a bad pratice en general,
 * because of those variables value can be modified by mistake any moment.
 * Besides, take into account LOCAL variables and constants have precedence over Global ones.
 */

const color = "blue";

function showColor() {
  const color = "red";
  console.log(color); //it will display local color;
}

function greet() {
  const greeting = "hi";
  console.log(greeting);
}

showColor();
//console.log(greeting);  uncomment this line and it will throw an error as "greeting" is a local const
