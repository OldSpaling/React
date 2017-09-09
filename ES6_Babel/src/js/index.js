var $ = require("jquery");
import CommonUtility from './utility.js';
import Student from './student.js';
import School from './school.js';

let school = new School();

$(document).bind("click", "#add", e => {
    let randomCode = CommonUtility.getRandomNum(10, 25);
    let student = new Student("狗蛋" + randomCode, randomCode, "201701" + randomCode, "Class" + randomCode);
    school.addStudents(student);
}).bind("click", "#expel", e => {
    let selectItems = $(".student-item:checked");
    let table = $("#student-container");
    if (selectItems.length == 0) {
        console.log("there isn't any selected item");
    }
    selectItems.map(itemDom => itemDom.value)
        .forEach(NO => school.expelStudents(NO));
    selectItems.parents("tr").remove();
}).bind("click", ".student-item", e => {
    //todo
    if ($(".student-item").length == $(".student-item:checked")) {
        $("#selectAll").attr("checked", true);
    } else {
        $("#selectAll").removeAttr("checked");
    }

}).bind("click", "#selectAll", e => {
    let $this = $(e.target);
    if ($this.attr("checked")) {
        $(".student-item").attr("checked", true);
    } else {
        $(".student-item").removeAttr("checked");
    }
});