const{getDoubleNumbers, 
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
    pascalTriangle} = require("./array");

beforeEach(() =>(
    numbers = [2,3,4,5,6,7]
))

test('multiply each number by two', () => {
    let result = getDoubleNumbers(numbers);
    let answer = [4,6,8,10,12,14];
    expect(result).toEqual(answer);
})

test ("Check even numbers", () => {
    let result = getEvenNumbers(numbers);
    let answer = [2,4,6];
    expect(result).toEqual(answer);
})

test ('Add three to each element', () => {
    let result = addThreeToEachElement(numbers);
    let answer = [5,6,7,8,9,10];
    expect(result).toEqual(answer);
})

test(`return odd numbers`, () => {
    let result = getOddNumbers(numbers);
    let answer = [3,5,7];
    expect(result).toEqual(answer);
})

test(`return words with length greater than 4`, () => {
    let words = ["hello", "world", "javaScript", "Java", "pet"];
    let result = getWordsWithLengthGreaterThanFour(words);
    let answer = ["hello", "world", "javaScript"];
    expect(result).toEqual(answer);
})

test(`return objects with age greater than 20`, () => {
    const students = [
        {name: "John", age: 22},
        {name: "Jane", age: 19},
        {name: "Doe", age: 25},
        {name: "Smith", age: 18}
    ];
    let result = getStudents(students);
    let answer = [
        {name: "John", age: 22},
        {name: "Doe", age: 25}
    ]
    expect(result).toStrictEqual(answer)
})

test(`return scores that are greater than or equal to 70`, () => {
    const testScores = [90, 50, 70, 80, 60, 85, 40, 30, 20, 10];
    let result = getScores(testScores);
    let answer = [90, 70, 80, 85];
    expect(result).toEqual(answer);
})

test(`add 5 points to each score`, () => {
    const scores = [85,92,78,88,95];
    let result = addFiveToEachElement(scores);
    let answer = [90,97,83,93,100];
    expect(result).toEqual(answer);
})

test(`return the square of each number`, () => {
    const numbers = [2,4,6,8,10]
    let result = squaredNumbers(numbers);
    let answer = [4,16,36,64,100];
    expect(result).toEqual(answer);
})

test(`distribute a different book to each member of the book club`, () => {
    const members = ["Emily", "Jack", "Sophia", "Daniel"];
    const books = ["The Alchemist", "The Great Gatsby", "The Catcher in the Rye", "To Kill a Mockingbird"];
    let result = distributeBooks(members, books);
    let answer = {"Daniel": "To Kill a Mockingbird", 
        "Emily":  "The Alchemist",
        "Jack": "The Great Gatsby",
        "Sophia": "The Catcher in the Rye"};
    expect(result).toEqual(answer);
})

test(`return classes offered in the afternoon`, () => {
    const classTimings = ["9:00am", "11:00am", "1:00pm", "3:00pm", "5:00pm"];
    let result = getAfternoonClasses(classTimings);
    let answer = ["1:00pm", "3:00pm", "5:00pm"];
    expect(result).toEqual(answer);
})

test(`return total amount spent on all categories`, () => {
    const expenses = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
    let result = getTotalAmount(expenses);
    let answer = 380;
    expect(result).toBe(answer);
})

test(`return an array of healthy items`, () => {
    const shoppingList = [
        {name: "Apples", category: "fruit", isHealthy: true},
        {name: "Potato chips", category: "Snacks", isHealthy: false},
        {name: "Carrots", category: "Vegetable", isHealthy: true},
        {name: "Chocolate Bars", category: "Sweets", isHealthy: false},
        {name: "Greek Yogurt", category: "Dairy", isHealthy: true},
        {name: "Soda", category: "Beverages", isHealthy: false}
    ];
    let result = getHealthyItems(shoppingList);
    let answer = [
        {name: "Apples", category: "fruit", isHealthy: true},
        {name: "Carrots", category: "Vegetable", isHealthy: true},
        {name: "Greek Yogurt", category: "Dairy", isHealthy: true}
    ];
    expect(result).toEqual(answer);
})

test(`return an array of ones and zeros`, () => {
    const numbers = [4,5,8,8,8,2,9]
    let result = getOnesAndZeros(numbers);
    let answer = [0,1,0,0,0,0,1];
    expect(result).toEqual(answer);
})

// test(`return an array of the highest common factor`, () =>{
//     const numbers = [6,12,18]
//     let result = getHighestCommonFactor(numbers);
//     let answer = [2,3]
//     expect(result).toEqual(answer);
// })

test('generate the first rows of pascal triangle', () => {
    let result = pascalTriangle(5);
    let answer = [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]];
    expect(result).toEqual(answer);
})