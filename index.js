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
let newArray = []
for(element of arr){
	if(element % 2 != 0){
		newArray.push(element);
	}
}
return newArray;
}


module.exports = {addTwoNumbers, multiply, divideTwoNumbers, getOddNumbers};