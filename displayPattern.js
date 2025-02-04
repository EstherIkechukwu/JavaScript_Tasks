function displayPattern() {
	var prompt = require('prompt-sync')();
	let number = prompt("Enter a number: ");

	for(let index = 0; index <= number; index++){
		for(let point = 0; point <= index; point++){
			console.log(point)
		}
		console.log("\n");
	}
}
displayPattern()