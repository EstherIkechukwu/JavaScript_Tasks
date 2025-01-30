function isPalindrome() {
	var prompt = require('prompt-sync')();
	let number = prompt("Enter a three digit integer: ");

	while(number > 0){
		let lastNumber = number % 10
		let firstNumber = Math.floor(number / 100)

		if(lastNumber == firstNumber){
			return true
		}
		return false
	}

}
console.log(isPalindrome())