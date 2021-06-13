/**
 * If we create a new Array, and then we look at its prototype object, we will see this derives from
 * Array(). This is the base class for any array object we create on JS. ArrayBase in turns derives
 * from ObjectBase. That is what is knew as MultilevelInherintance.
 */

let array = []; //check the multi-level inheritance on the console.

/**
 * CORE CONCEPT!!!!: Objects create by a given constructor, will have the same Prototype.....
 */

function Circle(radius) {
  this.radius = radius;
  this.ShowArea = function () {
    console.log("Circle area is: " + Math.PI * radius * radius);
  };
}

//All the objects we create by using above constructor, will have the same Prototype (CircleBase)

let circle1 = new Circle(1);
let circle2 = new Circle(2);

console.log(Object.getPrototypeOf(circle1) === Object.getPrototypeOf(circle2)); //returns true.
//in the same way all the arrays we create will have the same prototype (ArrayBase)
