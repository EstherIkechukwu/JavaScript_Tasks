function getPentagonalNumbers() {
let pentagonalNumber;
		var prompt = require('prompt-sync')();
		let userInput = prompt("Enter a number: ");
		
		for(let index = 1; index < 101; index++){
		pentagonalNumber = userInput + index * (3 * (userInput + index) - 1) / 2
    			console.log(pentagonalNumber)
		}
}

getPentagonalNumbers()