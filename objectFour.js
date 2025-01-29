const person = {
	firstName : "Esther",
	lastName : "Ikechukwu",
	fullName : function() {
		return person.firstName +" "+ person.lastName
	}
};

comsole.log(person.fullName());