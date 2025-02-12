const {getStudentName, 
    getSecondCourse, 
    getZipCode, 
    updateAge, 
    getDetails, 
    getAge} = require("./student.js");

beforeEach(() => student = {
    name : "John Doe",
    age : 22,
    courses : ["Math", "Physics", "Computer Science"],
    address : {
        city: "New York",
        zip: 10001,
    },
    GPA: 3.8
})

test('get student name', () => {
expect(getStudentName(student)).toBe("John Doe");
});

test('get second course', () => {
    expect(getSecondCourse(student, 1)).toBe("Physics");
});

test('get zip code', () => {
    expect(getZipCode(student)).toBe(10001);
});

test('get age', () =>{
    expect(getAge(student)).toBe(22);
});

test('update age', () =>{
    student = updateAge(student, 23);
    expect(getAge(student)).toBe(23);
});

test('get details returns correct value', () =>{
    student = updateAge(student, 23);
    expect(getDetails(student)).toBe("John Doe is 23 years old and has a GPA of 3.8")
});