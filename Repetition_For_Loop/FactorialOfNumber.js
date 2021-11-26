// Take User Input
const prompt= require("prompt-sync")();
const n=parseInt(prompt("Enter  number: "));
console.log("Factorial is : " ,n);
let fact = 1;    
for(let i = 1; i <= n; i++){    
    fact = fact * i;  
console.log("Factors of Number: " + i)  
}    
console.log("Factorial of Number: " + n + " is : " + fact);