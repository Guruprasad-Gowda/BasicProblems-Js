function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function findPrimeNumbersInRange(start, end) {
    console.log("Prime numbers between " + start + " and " + end + ":");
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  const start = 3;
  const end = 25;
  findPrimeNumbersInRange(start, end);
  