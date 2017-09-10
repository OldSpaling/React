import Student from './student.js';

var $ = require("jquery");

class School {
    constructor() {
        this.students = [];
        let students = [
            new Student("孬蛋", 18, "201701", "Class1"),
            new Student("二狗", 19, "201702", "Class2"),
            new Student("瓜娃子", 18, "201703", "Class1"),
            new Student("鹌鹑蛋", 19, "201704", "Class3"),
        ];
        students.forEach(student => {
            this.addStudents(student)
        });
    }
    addStudents(student) {
        this.students.push(student);
        $("#student-body-container").append(student.createRow());
    }
    expelStudents(NO) {
        this.students = this.students.filter(value => value.NO == NO);
        $(`#student-body-container [value=${NO}]`).parents('tr').remove();
    }
}
export default School;