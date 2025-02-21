class Human{
    // #name;
    // #age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }  

    set firstName(name){
        this.name = name;
    }

    get firstName(){
        return this.name;
    }

    get speak(){
        return `${this.name} is speaking German`;
    }

}

let personOne = new Human("Bibi", 12);
console.log(personOne);

module.exports = Human;