const Circle = function () {
  this.draw = function () {
    console.log(this); //here "this" key word references to this particular object
  };
};

const c = new Circle();

//--Method call, where are calling a method on an object
c.draw(); //here this is the Circle object

//now instead of calling this method like this, let us get a reference to this method, storage it
//into a constant and then let's call it

const draw = c.draw; //notice we are not calling the method c.draw(), we are not using the parentheses.
console.log(draw); //in this way this is going to print the metod as it is in the line 2

//now let's call this function like this draw()
//--FUNCTION CALL, where calling it as an stand alone function. It is not part of an object
draw();

/*So, when we do this buy default "this" is not longer pointing to an object. It is pointing to the
GLOBAL object. Now intead of seeing the circle object, we are seing the Windows object 
(Because we are in the browser, in node it would be the Global)*/

/**
 * Just to remeber, when we use the "new" key word, Js engine creates a new empty object and set "this"
 * in the constructor function to point to this empty object. Also, "this" key word always point to the
 * Global object (Window in the browser and Global in Node). We have exactly the same principle here.
 *
 */
