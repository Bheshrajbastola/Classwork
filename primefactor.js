// Write a function in JS to find the prime factors of any integer. This function should take
// an integer as a parameter and should return a list of prime factors for that number.
// Suggest the time complexity of your written function.



function primeFactors(num) {
    let factors = [];
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        factors.push(i);
        num /= i;
      }
    }
    return factors;
  }
  
