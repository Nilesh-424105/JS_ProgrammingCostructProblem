// Take User Input
const prompt= require("prompt-sync")();
const n=parseInt(prompt("Enter Num Between 1 to 7 number: "));
console.log("Enter Number Between 1 to 7: " , n);

if (n == 1){
    console.log("Sunday");   
}
else if (n == 2){
    console.log("Monday");    
}
else if (n == 3){ 
    console.log("Tuesday");   
}
else if (n == 4){
    console.log("wednsday");   
}
else if (n == 5){ 
    console.log("Thursday");    
}
else if (n == 6){
    console.log("Friday");   
}
else if (n == 7){
    console.log("Saturday");
}
else
    console.log("enter valid input");