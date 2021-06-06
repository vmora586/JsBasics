/**
 * In the previous excercise we used the object literal sintax for initializing an object. Now try
 * to do the same by using the factory and then the constructor function.
 * NOTE: When an object contains at least on method in its prperties, we say this object has behaviour.
 * For those cases, it is hihgly recommended use factory or constructor instead of object literal sintax.
 */

let address = createAddress("a", "b", "c");
console.log(address);

//factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

//constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address2 = new Address("d", "e", "f");
console.log(address2);
