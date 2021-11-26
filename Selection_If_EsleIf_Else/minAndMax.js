// Take User Input
const prompt = require("prompt-sync")();
const a = parseInt(prompt("Enter first num is a: "));
const b = parseInt(prompt("Enter Second num is b: "));
const c = parseInt(prompt("Enter Third num is c: "));
console.log("NUM's are: ",a,b,c);


//operations
let operation1 = a + b * c;
console.log("operation 1 value is : " + operation1);
let operation2 = a % b + c;
console.log("operation 2 value is : " + operation2);
let operation3 = c + a / b;
console.log("operation 3 value is : " + operation3);
let operation4 = a * b + c;
console.log("operation 4 value is : " + operation4);

//maximum operation value
if(operation1 > operation2 && operation1 > operation3 && operation1 > operation4)
    console.log("operation 1 is max : " + operation1);
else if(operation2 > operation1 && operation2 > operation3 && operation2 > operation4)
    console.log("operation 2 is max : " + operation2);
else if(operation3 > operation1 && operation3 > operation2 && operation3 > operation4)
    console.log("operation 3 is max : " + operation3);
else
    console.log("operation 4 is max : " + operation4);

//minimum operation value
if(operation1 < operation2 && operation1 < operation3 && operation1 < operation4)
    console.log("operation 1 is min : " + operation1);
else if(operation2 < operation1 && operation2 < operation3 && operation2 < operation4)
    console.log("operation 2 is min : " + operation2);
else if(operation3 < operation1 && operation3 < operation2 && operation3 < operation4)
    console.log("operation 3 is min : " + operation3);
else
    console.log("operation 4 is min : " + operation4);