import Person from './Person.js';

var $ = require("jquery");

class Student extends Person{
    constructor(name,age,NO,className){
        super(name,age);
        this.className=className;
        this.NO=NO;
    }
    say(){
        return `${this.name}是小学生，今年${this.age}岁了,班级：${this.className},学号：${this.NO}`;
    }
    createRow(){
        return eval("`"+$("#student-template").html()+"`");
    }
}
export default Student;