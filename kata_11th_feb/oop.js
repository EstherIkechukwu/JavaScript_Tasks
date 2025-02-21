// prototype inheritance
let animal = {
    name: "unknown",
    colour: "",
    soundType: "",
    sound: function() {
        return `${this.name} makes a sound`
    }
};

let dog = Object.create(animal);
dog.name = "Bingo";
dog.colour = "Brown";
dog.soundType = "Bark";
dog.looks = "Cute";
dog.sound = function() {
    return `${this.name} makes a ${this.soundType} sound and it looks ${this.looks}`
}
console.log(dog.sound());
console.log(dog);
                     
let cat = {}
Object.setPrototypeOf(animal,cat);
cat.name = "pussyCat";
cat.colour = "White";
cat.soundType = "Meow";
console.log(cat);


