const Human = require('./oopClass');

class Person extends Human{
    #gender;

    constructor(name, age,gender){
        super(name, age);
        this.#gender = gender
    }

    speak(){
        return `${this.name} is speaking Igbo`
    }
}

let personOne = new Person("Bibi", 12, "Male");
console.log(personOne.speak());

