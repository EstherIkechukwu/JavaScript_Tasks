function getDoubleNumbers(arrayOfNumbers){
    let doubledNumbers = [];
    arrayOfNumbers.forEach((element)=> {
        let result = element * 2
        doubledNumbers.push(result);
    });
    return doubledNumbers
}

const getEvenNumbers = (arrayOfNumbers) => {
    let evenNumbers = []
    arrayOfNumbers.forEach((element)=> {
        if(element % 2 == 0){
            evenNumbers.push(element)
        };
    });
    return evenNumbers
}

function addThreeToEachElement(arr) {
    let result = arr.map((number) => (number + 3))
    return result
}

function getOddNumbers(arr) {
    let oddNumbers = arr.filter((number) => number % 2 !== 0)
    return oddNumbers
}

function getWordsWithLengthGreaterThanFour(arrayOfWords) {
    let wordsWithLengthGreaterThanFour = arrayOfWords.filter((word) => word.length > 4)
    return wordsWithLengthGreaterThanFour
}

function getStudents(students) {
    return students.filter((student) => student["age"] > 20)
}

// const getStudents = (students) => {
//     return students.filter((student) => student.age > 20)
// }

function getScores(scores) {
    return scores.filter((score) => score >= 70)
}

function addFiveToEachElement(arr) {
    return arr.map((number) => number + 5)
}

function squaredNumbers(arr) {
    return arr.map((number) => number * number)
}

function distributeBooks(books, members) {
    const library = {};
    for(let [index, key] of books.entries()) {
        library[key] = members[index]
        }
    return library
}

function getAfternoonClasses(classTimings) {
    return classTimings.filter((time) => time.includes("pm"))
}

function getTotalAmount(expenses) {
    let total = 0;
    for(let expense in expenses) {
        total += expenses[expense]
    }
    return total
}

function getHealthyItems(shoppingList){
    let items = shoppingList.filter((item) => item["isHealthy"] === true)
    return items
    // let healthy = shoppingList.forEach((element)=> {
    //     if(element["isHealthy"] === true){
    //     }
    // });
}

function getOnesAndZeros(numbers) {
    return numbers.map((number) => number % 2 === 0 ? 0 : 1)
}

function getHighestCommonFactor(numbers) {
    let highestCommonFactor = [];
    for(let index = 1; index <= Math.min(numbers); index++) {
        for(let number in numbers){
            if(numbers[number] % index !== 0) {
                break
            }
        }
    }
    return highestCommonFactor
}


module.exports = {getDoubleNumbers, 
    getEvenNumbers, 
    addThreeToEachElement, 
    getOddNumbers, 
    getWordsWithLengthGreaterThanFour,
    getStudents, getScores,
    addFiveToEachElement,
    squaredNumbers, distributeBooks,
    getAfternoonClasses,
    getTotalAmount,
    getHealthyItems, 
    getOnesAndZeros,
    getHighestCommonFactor}; 