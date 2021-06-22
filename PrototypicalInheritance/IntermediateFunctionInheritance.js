/**
 * With our current implementation whe can set any new class to inherit from shape. However, any time
 * whe want to add a new class to the inheritance three, those two lines have to be duplicated.
 * Class.Prototype= Object.create(Class.Prototype);
 * Class.prototype.constructor=Class.
 * This code can cause a little noise.... let's refactor a little.
 */

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

//this function sets the inheritance tree
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

extend(Circle, Shape);
extend(Square, Shape);

Square.prototype.rotate = function () {
  console.log("Rotating");
};

Circle.prototype.move = function () {
  console.log("Moving");
};
