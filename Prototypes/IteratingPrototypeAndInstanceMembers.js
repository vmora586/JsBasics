/**
 * From instance members you can get access to prototype members and viceverse.
 * (Just remeber use the key word 'this'). Additionally, it does not matter if you
 * create an instace of an object and then modify its prototype. As we are working
 * with reference members, changes will be taken in real time.
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw"); //from here you could call this.Move()
  };
}

let myCircle = new Circle(1);

Circle.prototype.move = function () {
  console.log("Move"); //from here you could call this.Draw()
};

//returns only instance (own) members
console.log(Object.keys(myCircle));
console.log(myCircle.hasOwnProperty("draw")); //it will print true

//shows both instance and prototype members
for (let key in myCircle) console.log(key);
console.log(myCircle.hasOwnProperty("move")); //it will print false;
