/**
 *Sometimes we can use default values for the arguments of a function. Befor Enma Script 6 it was achivied by
 let variable= argument || "defaultValue".
 Below let's see how can we do this now.
 */

function interest(principal, rate = 3.5, year = 5) {
  return ((principal * rate) / 100) * year;
}

console.log(interest(10000, 3.5, 5)); //result must be the same in both lines
console.log(interest(10000));

/**
 * if we want to set default values only for the "year" argument, we must use "undefined" for the
 * rate argument; however it is a not recomended pratice
 * console.log(interest,undefined,5);
 */
