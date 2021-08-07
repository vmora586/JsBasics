/**
 * ES6  provides us another way to implement private properties and methods call WeakMaps.
 * Those are mainly Dictionaries, which key is an object and the value can be anything.
 */

//let's use the convention for private fields
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    //this.radius=radius; traditioal way of doing this

    /**
     * Set method takes two parameters. First one represents the key and it is an object.
     * For this we are setting "this" which represents an
     * instance of the Circle object. In the value we are setting the radius property
     * Technically, we can get acces to this private property if we can get acces to this
     * WeakMap() object, but leater in the course we are gonna work with a topic called
     * MODULES, and we will see how to hide the _radius attribute and only export the Circle
     * class. For now let's imagine nobody has access to _radius property and check the object
     * in the console
     */
    _radius.set(this, radius);
  }

  /**
   * Now, if we want to access this property values, we must use the Get method. To do this let's
   * expose a public method. Get method references the key of the WeakMap object. In this case
   * the key is the instance of the Circle object
   */

  draw() {
    console.log(_radius.get(this));
  }
}

/**
 * Now let's take a look the way how we can implement a private method. For doing that, let's
 * add an additional WeakMap object in the top. This takes two parameters too, an object as key
 * and a FUNCTION as value. There is a tricky part in this implementation because of the "this"
 * key work scope. Please check the section about how to implement "this" inside functions scope.
 */

_radius2 = new WeakMap();
_move = new WeakMap();

class Circle2 {
  constructor(radius) {
    _radius2.set(this, radius);

    //this is the tricky part we talked above.......
    /*_move(this, function (this){
        console.log('move', this); //inside this function 'this' target to the global object.
    });
    */

    /* just in case for any reason we need to get acces to the instance of the Circle2 class,
       we can replace previous implemention with an Arrow function, because of Arrow function
       take the 'this' value of its parent function.....
    */
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  //it does not make any sense call move method inside draw(),
  //we know it. But it is just for the explanation puposes.
  draw() {
    _move.get(this)(); //notice we added additional parenthesis as the get method returns a function
    console.log("draw");
  }
}

const c = new Circle(1);
const c2 = new Circle2(1);
