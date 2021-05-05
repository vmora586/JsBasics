/**
 * Using the constructor function create two objects and then add two functions to verify:
 * areEqual (validate if all the object properties are the same).
 * areSame (validate if booth objects are pointing to the the same memory reference)
 */

let address = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");

console.log(areSame(address, address));
console.log(areEqual(address, address2));

function Address(street, city, zipCode) {
  this.city = city;
  this.street = street;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  for (let key in address1) if (address1[key] !== address2[key]) return false;

  return true;
}

function areSame(address1, address2) {
  return address1 === address2;
}
