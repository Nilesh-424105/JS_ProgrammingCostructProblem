//take input from user
const prompt = require("prompt-sync")();
const num = prompt("Enter number: ");
//function call
checkPalindrome(num);
checkPrime(num);

// check palindrome 
function checkPalindrome(num) {
    let temp = num;
    let reverse = 0;
    let result = 0;

    while (num > 0) {
        result = (num % 10);
        reverse = (reverse * 10) + result;
        num = parseInt(num / 10);
    }

    if (temp == reverse)
        console.log("Number is a palindrome");
    else
        console.log("Number is not a palindrome");
}

// Check Prime Number
function checkPrime(num) {
	let flag = 1;
	if(num == 1) {
    		console.log("Its not a prime number")
	}
	else {
   		for(i = 2; i <= num/2; i++) {
      			let prime = num % i;
        		if(prime == 0){
            			flag = 0;
           	 		break;
        		}
        		if(prime != 0) {
            			flag = 1;
        		}
    		}
		if(flag == 0) {
        		console.log("Its not a prime number");
    		}
   		else {
        		console.log("Its a prime number");
        		true;
    		}
	}
}
