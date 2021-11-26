// Take User Input
const prompt = require("prompt-sync")();
const n = parseInt(prompt("Enter Num Between 1 to 7 number: "));
console.log("Enter Number Between 1 to 7: ",n);
switch (n){
case 1: 
    console.log("Sunday");
    break;
case 2: 
    console.log("Monday");
    break;
case 3: 
    console.log("Tuesday");
    break;
case 4: 
    console.log("wednsday");
    break;
case 5: 
    console.log("Thursday");
    break;
case 6: 
    console.log("Friday");
    break;
case 7: 
    console.log("Saturday");
    break;
default:
    console.log("enter valid input");
}