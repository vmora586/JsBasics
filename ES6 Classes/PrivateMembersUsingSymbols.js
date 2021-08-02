/**
 * Abstraction is the principle  while we can hide implementation details from our code. Remember DVD
 * player example. For doing that, we need to have private members inside our classes. Let's take a look
 * to the way how  Es6 classes implements that access modifiers for properties and methods.
 * In this lecture, the key topic is the use of Symbol() attribute. This gives an unic identifier
 * for the member which implement it.
 */

_radius = Symbol(); //Symbol is not a class, so we can not use new key word.
_draw = Symbol();

class Circle {
  constructor(radius) {
    //this.radius = radius; traditional way of doing this.
    this[_radius] = radius; //now radius property is shown like Symbol()=1. It is still visible by using a code like the written down below
  }

  /*if we would want to add a method...
  draw(){
      code implementation....
  }
  */
  [_draw]() {
    //this feature was added on ES6 and it is called Computed Property Name.
    //the expression inside the brackets will be evaluated and once done the result of that
    //will be assigned as name to the method.
    console.log("private draw");
  }
}

const c = new Circle(1);
//code to get access to hidden fields and methods
const key = Object.getOwnPropertySymbols(c)[0]; // Object.getOwnPropertySymbols returns an array
console.log(c[key]); //c.key & c[key] shows the same
