function reverseNumber() {
	var prompt = require('prompt-sync')();
	let num = prompt("Enter a three digit integer: ");

    	let reversed = 0;
    	let number = Math.abs(num);

    	while (number > 0) {
        	reversed = (reversed * 10) + (number % 10);
        	number = Math.floor(number / 10);
    	}
    	return reversed * Math.sign(num);
}
console.log(reverseNumber())
