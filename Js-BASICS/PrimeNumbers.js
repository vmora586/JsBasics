showPrimeNumbers(11);

function showPrimeNumbers(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}
