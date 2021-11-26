// Take User Input
const prompt= require("prompt-sync")();
const n=parseInt(prompt("Enter number: "));
console.log("POWER of 2 is: ",n);
let pow = 2;       
for(let i=0; i <= n; i++) {
    if(i == 0) {
        console.log("power of 2^" + i + "=" + 1);  
    }
    else {
        pow = pow * 2;
        console.log("power of 2^" + i + "= " + pow);
    }
}