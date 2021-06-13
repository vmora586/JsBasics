/**
 * All the objects we create and also all the base Objects have Attributes and additionally, they
 * have propertis related to that attributes.
 */

let user = { name: "victor" }; //this object derives from BaseObject. So, it has the .ToString() method.
console.log(user.toString()); //this prints [object object]

console.log(Object.keys(user)); //it will print only ['name'];
/**
 * also, if we try to iterate all the object properties, we will be able to see only those which belongs
 to the object itself, NOT the ones from its up inheritance tree.
 */

for (let key in user) console.log(key); //it will print only name

/**
 * if we want to see all the properties, as well as the toString() method implementation, we need first
 * to get access to the person object PropertyDescriptors attribute, and the modify it to grant access
 * to the person object up inheritance properties.
 */

let objectBase = Object.getPrototypeOf(user);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor); // this object show us the current configuration for all the object base attributes

Object.defineProperty(user, "name", {
  enumerable: true, //if we modify this, property will not be longer shown when iterate attributes
  configurable: false, //now we can not delete the property.
  writable: false, //this will set property as read only
}); //this is the property wich allows to iterate throught all the attributes

delete user.name; //it does not longer work as we modified configurable attribute
for (let key in user) console.log(key);
