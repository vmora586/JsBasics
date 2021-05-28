/**
 * creates a Circle object wich allows set and get the radius value, but only get the are
 * total. Remember use the Object Literal Sintax
 */

const circle = {
  radius: 0,
  set setRadius(radius) {
    this.radius = radius;
  },
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

circle.radius = 2;

console.log(circle.area);
