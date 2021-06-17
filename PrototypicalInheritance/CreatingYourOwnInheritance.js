/**
 * Javascript allow us creating our own inheritance structure. In that way we can avoid
 * to create many objects and then add customized methods and properties to its constructors.
 *
 */

function Circle(radius) {
  this.radius = radius;
}

/**
if we would want to add a new Class called Square and to inherit the above method, it would be 
required to duplicate the line Square.prototype.draw..... Let's see a better approach by using our own 
inheritance tree. In js we have a method for creating an object with a given prototype 
Object.create(prototype)
*/

//let's define our Shape (parent) constructor
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

//now let's set Shape as parent of circle and thats all, now circle has inherited Shape methods.....!!
Circle.prototype = Object.create(Shape.prototype);

//this method was original declared on top of the file
Circle.prototype.draw = function () {
  console.log("Draw");
};

let myCircle = new Circle(1);
console.log(myCircle.duplicate());
