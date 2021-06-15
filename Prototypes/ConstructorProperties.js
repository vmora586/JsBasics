/**
 *We already now all objects (exept the Base object) in javascript have a prototype. Besides that
 all the constructors have their own Prototype object. The constructor Prototype is exactly the same all
 the objects created from it, have. 
 */

function Circle(radius) {
  //this is our CircleBase object
  this.radius = radius;
  this.ShowArea = function () {
    console.log("area: " + Math.PI * radius * radius);
  };
}

let myCircle = new Circle(1); //this object has a parent (prototype) which is CircleBase
//in the console myCircle.__Proto__ will be equals than Cricle.Protoype
