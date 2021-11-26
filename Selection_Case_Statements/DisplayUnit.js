// Take User Input
const prompt = require("prompt-sync")();
var n = parseInt(prompt("Enter Number like 1, 10 ,100...: "));
console.log("NUm is: ",n);
switch (n){
case 1: 
    console.log("Unit");
    break;
case 10: 
    console.log("Ten");
    break;
case 100: 
    console.log("Hundered");
    break;
case 1000: 
    console.log("Thousand");
    break;
case 10000: 
    console.log("Ten Thousand");
    break;
default:
    console.log("enter valid input");
}