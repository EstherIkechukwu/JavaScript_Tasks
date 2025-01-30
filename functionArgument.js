//function as an Argument

let firstName = "Esther"

function greet(name) {
	return `Hello ${name}`
};

function executeFunction(callback, userName){
	return callback(userName)
}

let result = executeFunction(greet, firstName)
console.log(result)

