/**
 * this operator makes easier copy and slice operations.
 * ... (spread) operator will take all the Elements from the selected array and will return them to
 * be used.
 */

const first = [1, 2, 3];
const second = [4, 5, 6];

const copy = [...first, "a", ...second, "b"];
console.log(copy);
