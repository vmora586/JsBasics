/**
 * ES6 proviedes a far easier way to implement getters and setters than Protiphycal inheritance one.
 */

_radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    /**
     * in Prototipycal inheritance way...
     * Object.defineProperty(this, 'radius',{
     *   get: function(){
     *          ......}
     * })
     * too confused and poluted.....
     */
  }

  /**
   * we can implement this as a normal method. However there is a nicer way,
    get() {
        return _radius.get(this);
  }
  */
  get radius() {
    return _radius.get(this);
  }

  //same patter for the setters
  set radius(value) {
    if (value < 0) throw new Error("Invalid radius value");
    _radius.set(this, value);
  }
}
const c = new Circle(1);
