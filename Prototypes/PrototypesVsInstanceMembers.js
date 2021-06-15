/**
 * All the methods and properties we defined for an object, are called instace methods. That means,
 * that every instance we create, will contain the same properties and methods. So, the method Draw()
 * we added to our Circle constructor, will be reproduced N times on memory (one for each new instance)
 */

/* Original Version
function Circle(radius) {
  this.radius = radius;
  this.Draw = function () { ---this method will be duplicated in memory N times
    console.log("Draw");
  };
}
*/

//For avoiding this, we can move the method declaration to the constructor parent (constructor method)
Circle.prototype.Draw = function () {
  //prototype members
  console.log("Drawing");
};

//Then, now we can removed the Instance method from our constructor declaration
function Circle(radius) {
  //instance members
  this.radius = radius;
}

//if we create a new instance of circle, we can still get access to the Draw method (prototyphical inheritance)
let myCircle = new Circle(1);
console.log(myCircle.radius); //it will print 1
console.log(myCircle.Draw()); // it will print Drawing
