//array declaration
const arr=[];
let j = 0;

for (let i=1; i<100; i++){
	if ((i%11) == 0){
		arr[j] = i;
        j++;
	}
}
console.log("Digit Repited twice in number in 0 to 100 : " +arr);