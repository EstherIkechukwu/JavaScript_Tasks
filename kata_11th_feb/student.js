const student = {
    name : "John Doe",
    age : 22,
    courses : ["Math", "Physics", "Computer Science"],
    address : {
        city: "New York",
        zip: 10001,
    }
}

function getStudentName(student) {
    return student.name
}

function getSecondCourse(student, index){
    return student.courses[index]
}

function getZipCode(student){
    return student.address.zip
}

function getAge(student) {
    return student.age
}

function updateAge(student, newAge) {
    student.age = newAge
    return student
}

function getDetails(student) {
    let details = getStudentName(student) 
    + " is "+  getAge(student) + " years old and has a GPA of " + 
    getGPA(student)
    return details
}

function getGPA(student) {
    return student.GPA
}

student.GPA = 3.8


module.exports = {getStudentName, getSecondCourse, getZipCode, updateAge, getAge, getDetails}