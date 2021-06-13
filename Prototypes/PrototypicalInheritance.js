/**
 *Inheritance is one of the four pilars of the POO which allows classes take atributes and behaviour
 * from other classes up of them on the structure. Those classes are usually called Parent classes.
 * However, because of in Javascript does not exists the classes in the same way they exists in other
 * languages (here just exists objects), the inheritances takes the name of 'Prototypical Inheritance'
 *
 *
 * ----In javascript PARENT means Prototypes !!!!
 */

//Circle --> Shape (circle Is a Shape)

let x = {};

/*
if we evaluate in the chrome console we will see this object has a property called __proto__: 
which points to its parent. Just by the course we are going to call this object as "ObjectBase".
 All the objects created in JS directly or indirectly inherits from this Object. 
 Object Base is the root object in Js and it does not have a prototype or parent.
*/

//for getting an object parent or its Prototype, we can use next stament:

Object.getPrototypeOf(x);
//to prove ObjectBase is the prototype of any object you create, do this exercise

let y = {};
let z = {};

Object.getPrototypeOf(y) === Object.getPrototypeOf(z); //this will print true

//Look we did not write an expression like this:
x.__proto__ === y__proto__; // the reason for this is that expression is deprecated and it must not be use any more.

/**
 * Prototypical Inheritance: When you call for an object property or method, Js engine looks firs in the current
 * object for this, if he can not find out it then he will find out for it in its prototype (parent) and so on
 * until he can find the target member.
 * ----A prototype is just a regular object in Memory!!!!----
 */
