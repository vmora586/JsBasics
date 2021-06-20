/**
 * Now let's put the previous example to the next level. Try to add a new property called color to
 * the parent constructor (shape), as we want all new shapes we create to have a color. For doing this,
 * it is mandatory to specify what instance we want to use at the moment of doing the assignament, because
 * of the way how the 'new' operator works. Remember, it will create an empty object, then it will return
 * that empty object from the base class constructor.
 */

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

/*
original way of working
function Circle(radius) {
  this.radius = radius;
}
*/

//now let's add a color for the parent constructor
function Circle(radius, color) {
  //Shape(color) --> it will not work as we did not use 'new' operator, and in shape constructor 'this' is referencing global object.
  // new Shape(color) --> it will not work either, as it is creating a new instance not the one we have here.
  Shape.call(this, color); //remember functions are objects in JS, Call is an available method on Shape Method.
  this.radius = radius;
}

//creating inheritance tree
Circle.prototype = Object.create(Shape.prototype);

//Reseting constructor property.
Circle.prototype.constructor = Circle;
