function displaySortedNumbers() {

	var prompt = require('prompt-sync')();
	let firstNumber = prompt("Enter a number: ");
	let secondNumber = prompt("Enter a number: ");
	let thirdNumber = prompt("Enter a number: ");
	
	const numbers = []
	numbers.push(firstNumber)
	numbers.push(secondNumber)
	numbers.push(thirdNumber)

	numbers.sort((a, b) => a - b);
	console.log(numbers)

}
displaySortedNumbers()