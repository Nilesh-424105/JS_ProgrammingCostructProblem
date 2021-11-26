// Take User Input
console.log("Enter values for Feet, Inch, Meter");
const prompt = require("prompt-sync")();
let feet = parseInt(prompt("Enter Feet: "));
console.log("feet is: ",feet);
let inch = parseInt(prompt("Enter inch: "));
console.log("inch is: ",inch);
let meter = parseInt(prompt("Enter meter: "));
console.log("meter is: ",meter);

console.log("Enter 1.Feet to Inch \n 2. Feet to Meter \n 3. Inch to Meter \n 4. Meter to feet ");
const num = parseInt(prompt("Enter number : "));
console.log("num is: ",num);

switch (num){
case 1: 
    inch = feet * 12;
    console.log("feet to inch conversion is : "+ feet +" feet = "+ inch +" inch");
    break;
case 2: 
    meter = feet * 0.3048;
    console.log("feet to meter conversion is : "+ feet +" feet = "+ meter +" meter");
    break;
case 3: 
    meter = inch / 39.37;
    console.log("inch to meter conversion is : "+ inch +" inch = "+ meter +" meter");
    break;
case 4: 
    inch = meter * 12 * 0.3048;
    console.log("inch to meter conversion is : "+ meter +" meter = "+ inch +" inch");
default:
    console.log("enter valid input");
}