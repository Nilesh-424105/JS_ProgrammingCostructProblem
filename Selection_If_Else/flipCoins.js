// getting head or tail
const flipCoin = Math.floor(Math.random() * 10) % 2;
console.log("Random value is : "+ flipCoin);
let head = 1;
let tail = 0;
//check head or tail
if(head == flipCoin)
    console.log("Coin Flip Result is HEAD");
else
    console.log("Coin Flip Result is Tail");