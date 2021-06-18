/**
 * As we could see in the last exercise, all objects we create have a 'constructor'
 * property that returns the constructor that was used to construct or create that object.
 * With the previous implementation we did, we have a tiny problem, if we would want to use
 * the constructor property for creating a new instance of the object (this is very rare, but posible)
 */

//let's replicate the same behaviour the past lesson.

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

function Square(side) {
  this.side = side;
}

//here is were we assign Shape as parent class of Circle
Circle.prototype = Object.create(Shape.prototype);
Square.prototype = Object.create(Shape.prototype);

/* thecnically, we could create a new object in this way:
   new Circle.prototype.constructor(1); This sentence is equivalent to a let c =new Circle(1).
   However, as we assigned Circle.prototype to the shape.prototype, we no longer have
   available new Circle.prototype.constructor(1) option.
   So, as the best practice 'WHEREVER YOU SET THE PROTOTYPE OF AN OBJECT, YOU MUST RESET
   ITS COSNTRUCTOR PROPERTY!!!!
*/

Circle.prototype.constructor = Circle;
Square.prototype.constructor = Square; //thats all, now our constructor property is as the beginin.
