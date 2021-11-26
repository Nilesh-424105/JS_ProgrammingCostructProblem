//array declaration
const array = [];
//random numbers
for ( let i=0; i < 10; i++ ) {
    array[i] = Math.floor ( Math.random() * 899) + 100;
}
//unsorted array
console.log("unsorted array is: [" + array + "]");

//sorting array
let sortedArray = array.sort();
console.log("sorted array is: [" + sortedArray + "]");

//second smallest number in array
let secondMin = sortedArray[1]; // 1 is index
console.log("Second smallest number is: " + secondMin);

//second largest number in array
let secondMax = sortedArray[8]; // .slice(start,end)
console.log("Second largest number is: " + secondMax);