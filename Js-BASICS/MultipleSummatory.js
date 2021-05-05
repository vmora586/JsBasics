//create a function which sums the multiples of 3 and  5 from 0 up to limit including the limit
//and the returns the summatory value

console.log(summatory(10));

function summatory(limit) {
  let result = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) result += i;
  }

  return result;
}
