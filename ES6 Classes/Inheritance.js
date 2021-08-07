/**
 * ES6 inheritance is far easier. We just need add key work 'extends'
 */

class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  /**
   *
   * @param {*} color
   * @param {*} radius
   */
  constructor(color, radius) {
    /**
     * there is an important thing here.  If we add a constructor to our class and its parent
     * class has a constructor too, it is mandatory to initialize parent constructor inside
     * our custom constructor method body. Other wise, it will throw an error.
     */
    super(color); //initializing parent constructor
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }
}

const c = new Circle("green", 2);
