// program to check if a number is prime or not
// take input from the user
let flag = 0;
const prompt= require("prompt-sync")();
const n=parseInt(prompt("Enter  number: "));
console.log("NUM is: " ,n);
		
if((n == 0) || (n == 1)) {
    console.log(n +" :Number is not a prime number");
}
else {
for(let i = 2; i <= n/2; i++) {
    if(n % i == 0) {
        console.log(n + " :Number is not a prime number");
        flag = 1;
        break;
    }
  }
}
if(flag == 0) {
    console.log(n + " :Number is a prime number");
}