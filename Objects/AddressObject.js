/*create an object with the next properties
 * street
 * city
 * zipCode
 * then create a function showAddress which takes an address object and prints all the properties along with its value
 * showAddress(address)
 */

const addres = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in addres) console.log(key, addres[key]);
}

showAddress(addres);
