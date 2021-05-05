/**
 * for joining arrays we can use the Join() method. This will return an STRING with the result of joining
 * the original array elements an any character we pass as paramater. This character is also optional.
 */

const numbers = [1, 2, 3];
const joined = numbers.join(",");
console.log(joined);

//Besides, you can Split the content of an string by using the Split() method, which returns an array.
const message = "This is my first message";
const splitted = message.split(" ");
console.log(splitted);
const joinedMessage = splitted.join("-");
console.log(joinedMessage);
