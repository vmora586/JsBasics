/**
 * Befor ES6 (also called ES2015) 'var' was the only way of declaring variables. On ES6, were introduced
 * 'let' and 'const' language key words for allowing "block scoped" variables and constants.
 * VAR creates "function scoped" variables. The recomendation is to avoid "var" key word use as much
 * as we can as all the variables we create with the "var" key word, are assigned to the Global WINDOW
 * object. If we are using a third part library and that one has a variable which name mathces with our
 * variable, that will be overrite by our.
 */

//using block code scope

function hi() {
  for (let i = 0; i < 5; i++) console.log(i); //block scoped varible

  console.log(i); //this line will thrown an exeption
}

//hi();
bye();

function bye() {
  for (var j = 0; j < 5; j++) console.log(j);
  console.log(j); //this line will not throw an exception. "j" variable is accesible along all the function.
}

var greeting = "hello"; // test this by calling on the console window.greeting.
