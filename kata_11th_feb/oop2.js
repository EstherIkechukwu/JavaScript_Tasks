//constructor function for objects
function Human(name, age, complexion) {
    this.name = name;
    this.age = age;
    this.complexion = complexion;

    this.describe = function() {
        return `${this.name} is ${this.age} years old and has a ${this.complexion} complexion`;
    };
};

let personOne = new Human("John", 22, "Fair");
console.log(personOne);
console.log(personOne.describe());

module.exports = Human;
