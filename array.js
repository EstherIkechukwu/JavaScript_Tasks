//const array = [1, "egg", {firstName, lastName}, null, []]; //literal method

const arrayOfNumbers = new Array(); // array constructor
arrayOfNumbers[0] = 20;
arrayOfNumbers[1] = 2;
arrayOfNumbers.push(1);
arrayOfNumbers.push(3);
arrayOfNumbers.push(4);

console.log(arrayOfNumbers);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
arrayOfNumbers.shift();
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(5);
arrayOfNumbers.unshift(6);
console.log(arrayOfNumbers);


// Array.from() method
let firstName = "Chinazaekpere";
let newArray = Array.from(firstName);
console.log(newArray);

// Array.of() method
let result = Array.of("eat", "sleep", "code");
console.log(result[0]);

let animals = ["dog", "chicken", "goat", "fish", "cow", "cat"];
console.log(animals.slice(1,3));

let results = animals.splice(2, 3, "sheep", "rabbit");
console.log(animals);