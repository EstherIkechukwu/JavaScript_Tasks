function sumDigits() {
	var prompt = require('prompt-sync')();
	let number = prompt("Enter a three digit integer: ");

    let sum = 0
	while(number > 0){
        let lastNumber = number % 10
        sum += lastNumber;
	number = Math.floor(number / 10)
    }
	console.log(sum)

}
sumDigits();

