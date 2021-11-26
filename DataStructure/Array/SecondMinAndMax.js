// array declaration
const array = [];

for ( let i=0; i < 10; i++ ) {
    array[i] = Math.floor( Math.random() * 899) + 100;
}

console.log("Random Numbers in Array is : [" + array + "]");
let min = array[0];
let max = array[0];
let secondMin = 0;
let secondMax = 0;


for (i = 0; i < array.length; i++) {
    if ( array[i] < min ) {
        secondMin = min;
        min = array[i];
    }
    else if ( array[i] < secondMin && array[i] != min ) {
        secondMin = array[i];
    }
}

console.log("Second smallest number is: " + secondMin);

for (i = 0; i < array.length; i++) {
       if ( array[i] > max ) {
        secondMax = max;
        max = array[i];
    }
    else if ( array[i] > secondMax && array[i] != max ) {
        secondMax = array[i];
    }
}
console.log("Second largest number is: " + secondMax);