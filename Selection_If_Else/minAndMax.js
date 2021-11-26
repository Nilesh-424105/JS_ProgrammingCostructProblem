const prompt = require("prompt-sync")();
const a = parseInt(prompt("Enter first num: "));
const b = parseInt(prompt("Enter Second num: "));
const c = parseInt(prompt("Enter Third num: "));
const d = parseInt(prompt("Enter Third num: "));
const e = parseInt(prompt("Enter Third num: "));
console.log("NUM's are: ",a,b,c,d,e);
if(a > b && a > c && a > d && a > e)
    console.log("maximum value is a : " + a);
else if(b > a && b > c && b > d && b > e)
    console.log("maximum value is b : " + b);
else if(c > b && c > a && c > d && c > e)
    console.log("maximum value is c : " + c);
else if(d > b && d > c && d > a && d > e)
    console.log("maximum value is d : " + d);
else if(e > b && e > c && e > d && e > a)
    console.log("maximum value is e : " + e);

//check maximum value
if(a < b && a < c && a < d && a < e)
    console.log("minimum value is a : " + a);
else if(b < a && b < c && b < d && b < e)
    console.log("minimum value is b : " + b);
else if(c < b && c < a && c < d && c < e)
    console.log("minimum value is c : " + c);
else if(d < b && d < c && d < a && d < e)
    console.log("Minimum Value is d: " + d);
else if(e < b && e < c && e < d && e < a)
    console.log("Minimum Value is e: " + e);
