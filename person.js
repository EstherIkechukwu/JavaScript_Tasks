const person = {
	firstName : "Esther",
	lastName : "Ikechukwu",
	age : 18
}

function user(person) {
	return `${person.firstName +" "+ person.lastName +" "+ person.age}`
}

console.log(user(person).toString())

