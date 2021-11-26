//take input From User
const prompt = require("prompt-sync")();
const YEAR = parseInt(prompt("Enter an Year : "));

// use if statement to check condition for leap year
if((YEAR % 4 == 0) && (YEAR % 100 != 0) || (YEAR % 400 == 0)) 
    console.log(YEAR +": Year is leap year");
else 
    console.log(YEAR +": Year is not leap year");