const prompt = require("prompt-sync")();
const DAY = parseInt(prompt("Enter Day : "));
const MONTH = parseInt(prompt("Enter month: "));

if(MONTH == 6 && DAY <= 20)
    console.log("Entered Month and Day is True");
else if((MONTH >= 3 && MONTH < 6) && DAY < 31)
    console.log("Entered Month and Day is True");
else 
    console.log("Entered Month and Day is False")