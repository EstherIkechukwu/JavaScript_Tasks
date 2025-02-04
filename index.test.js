//for primitive types

const {multiply, addTwoNumbers, divideTwoNumbers, getOddNumbers} = require("./index.js");

test('multiply two numbers', () =>{
	//Given that
	let numberOne = 2;
	let numberTwo = 6; //Arrange

	//Act
	let result = multiply(numberOne, numberTwo);

	//Assert
	let answer = 12
	expect(result).toBe(answer);
})

test('Add two numbers', () =>{
	//Given that
	let numberOne = 2;
	let numberTwo = 6; //Arrange

	let sum = addTwoNumbers(numberOne, numberTwo);
	let answer = 8;
	expect(sum).toBe(answer);
})

test('Divide two numbers', () =>{
	//Given that
	let numberOne = 8;
	let numberTwo = 2; //Arrange

	let divide = divideTwoNumbers(numberOne, numberTwo);
	let answer = 4;
	expect(divide).toBe(answer);
})

test('return odd numbers', () =>{
	let arrayOfNumbers = [1,2,3,4,8,5]
	let result = getOddNumbers(arrayOfNumbers);
	let answer = [1,3,5];
	expect(result).toEqual(answer);
})
