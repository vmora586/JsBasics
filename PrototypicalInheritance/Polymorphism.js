/**
 * Polymorphism is a powerfull feature of the POO, which allow us to implement the same method but
 * with a different behaviour (same signature --name and parameters--) but different implementation.
 */

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function parent(Child, Parent) {
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
parent(Circle, Shape); //creating our inheritance tree
parent(Square, Shape);

Circle.prototype.move = function () {
  //creating Circle base Object
  console.log("move circle");
};

Square.prototype.move = function () {
  //creating Square base object.
  console.log("move square");
};

let shapes = [new Circle(1), new Square(2)];

for (let shape of shapes) console.log(shape.move()); //now we can call the method wich has the same signature but different implementation
