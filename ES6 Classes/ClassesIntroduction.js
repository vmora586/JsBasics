/**
 * There are two different ways for declaring classes on ES6 (2015 JS). By using class declaration or
 * by using Class expression (to assign the class to a variable.) By convention and familiarity,
 * where are going to work with class the class declaration approach.
 */

//we must use key word class and the class name using Upper case

//How we would do this on Prototypical Inheritance

// function Circle(radius){
//     this.radius=radius;

//     this.draw=function(){
//         console.log("draw");
//     }
// }

class Circle {
  constructor(radius) {
    this.radius = radius;

    this.greeting = function () {
      //methods added inside constructor belong to this specific object.
      console.log("greetings");
    };
  }

  draw() {
    console.log("draw"); //at difference on Prototypical Inheritance, all methods added on class body, belongs
    //to its prototype (can be inherited for any child object)
  }
}

const c = new Circle(1);
