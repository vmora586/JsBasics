/**
 * Let us keep the previous example to the next level, by doing our Compose techinique
 * into a dynamic way. For achiving that, we need to use the Spread operator (...) at
 * the moment of getting the parameters, and also the Split (...) at the moment of using them.
 */

function mixin(target, ...sources) {
  //here ... is the Rest operator for agrouping al objects inside an array
  Object.assign(target, ...sources); //here (...) is the spread operator, as we're spreading an array into multiple ogbjects
}

const canEat = {
  eat: function () {
    console.log("eating");
  },
};
const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swiming");
  },
};

Person = function () {};
Fish = function () {};

//let us create the Composition
mixin(Person.prototype, canWalk, canEat);
mixin(Fish.prototype, canSwim, canEat);

let victor = new Person();
let goldFish = new Fish();

console.log(victor);
console.log(goldFish);
