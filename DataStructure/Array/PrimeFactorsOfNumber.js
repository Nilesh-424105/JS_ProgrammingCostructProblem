//calculate prime factors
const prompt = require('prompt-sync')();
let number = prompt("Enter a number to get prime factors: ");

function primeFactors(number) {
    //check factors are prime
    function isprime(factor) {
      for (let i = 2; i <= Math.sqrt(factor); i++)
      {
        if (factor % i == 0) return false;
      }
      return true;
    }
    //declare array to store prime factors
    const primeFactorArray = [];
    for (let i = 2; i <= number; i++)
    {
      while (isprime(i) && number % i == 0) 
      {
        console.log(" " + i)
        if (primeFactorArray.indexOf(i) == -1) primeFactorArray.push(i);
        number = number / i;
      }
    }
    return primeFactorArray;
  }
 
  console.log(primeFactors(number));