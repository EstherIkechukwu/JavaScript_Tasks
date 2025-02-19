function addTwoNumbers(firstNumber, secondNumber){
let answer = firstNumber + secondNumber;
return answer;
}


function multiply(numberOne, numberTwo){
let result = numberOne * numberTwo;
return result;
}

function divideTwoNumbers(firstNumber, secondNumber){
let answer = firstNumber / secondNumber;
return answer;
}

const getOddNumbers =(arr)=>{
let newArray = [];
let count = 0;
for(index in arr){
	if(arr[index] % 2 != 0){
		newArray[count++] = arr[index]
	}
}
return newArray;
}


module.exports = {addTwoNumbers, multiply, divideTwoNumbers, getOddNumbers};