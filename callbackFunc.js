const students = [
    { name: "anshul", topic: "callback functions" },
    { name: "jack", topic: "npm" },
    { name: "jony", topic: "exception handling" }
]
function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log("student has been enrolled");
        callback();
    }, 1000);
}
function getStudents() {
    setTimeout(function () {
        // console.log("yes i am here");
        for (var i = 0; i < students.length; i++) {
            console.log(students[i].name)

        }
    }, 3000)
}
var newStudent = { name: "alex", topic: "generators" }
enrollStudent(newStudent, getStudents);
