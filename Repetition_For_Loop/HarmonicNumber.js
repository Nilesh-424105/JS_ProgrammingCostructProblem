// Take User Input
const prompt= require("prompt-sync")();
const n=parseInt(prompt("Enter number: "));
console.log("Harmonic value is : " ,n);
if(n == 0) {
    console.log("Enter number greater than 0");
}
let sum = 0;
for(let i = 1; i <= n; i++) {  
    sum = sum + (1/i);
    console.log("sum =" + sum);
}
console.log("nth harmonic value is: " + sum);