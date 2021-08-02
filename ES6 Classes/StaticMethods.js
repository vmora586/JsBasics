/**
 * There are two types of methods. Instance and static methods. First ones are the most commons, and as their
 * name indicate, they are tied to an instance of an object. In constrast, we use static methods,
 * for instance, when we have utility methods which are not tied to an specific class instance. For declaring
 * this kind of methods, we must use key word "static".
 */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    //instance method
    console.log("draw");
  }

  static parse(string) {
    console.log(string);
    const radius = JSON.parse(string).radius; //assuming string is a valid json object
    return new Circle(radius);
  }
}

const c = Circle.parse('{"radius":2}');
console.log(c);
