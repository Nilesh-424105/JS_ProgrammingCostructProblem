// take input from the user
const prompt= require("prompt-sync")();
const n=parseInt(prompt("Enter  number: "));
console.log("NUM is: " ,n);
console.log("Prime Numbers are : ");
for(let i = 0; i <= n; i++){
    let count = 0;
    for(let j = 2 ; j <= i ; j++)	
    {
        if(i % j == 0)
            count = count + 1;
    }
    if(count == 1)
        console.log(i);
}