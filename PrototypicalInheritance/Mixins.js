/**
 * So far we have worked with multilevel inheritance. However, as general rule please remember:
 * AVOID CREATING INHERITANCE HIERARCHIES!!!!, as they are very fragile. If want to use inheritance
 * as code reuse technique, we must keep it of one level!!!!.
 * Another way for implementing code re-use avoiding coupling and code complexity introduced by
 * the inheritance hierarchies, is by using MIXIN....
 * Remember iheritance hierarchies example:
 * Animal: eat(), walk()
 * Person, Dog, GoldFish(it does not walk!!!)
 *            Animal
 *      |               |
 * Mamal                Fish
 *   |                    |
 * Person, Dog          GoldFish
 */

/**
 * For avoiding above complex and fragile structure, we can use a techique knew as Composition (Fixin)
 * FAVOR COMPOSITION OVER INHERITANCE.
 * it means, compose a new object based on some existing ones. In js we can define plain objects with all
 * the feature we need (CanIt(), CanWalk(), CanSwim()), and then assign them to the object who fills better.
 */

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

//now we can Compose these objects together to create a Person that can Eat and Walk. In ES6 we have
// method that is Object.assign(target, ) and we can use it to copy the properties an methods from
//one object to another.

function Person() {}

Object.assign(Person.prototype, canEat, canWalk);
let victor = new Person();

console.log(victor);
