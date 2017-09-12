var $ = require("jquery");
import CommonUtility from './js/common/utility.js';
import Student from './js/common/student.js';
import School from './js/common/school.js';

import './css/index.css';

let school = new School();

$(document).on("click", "#add", e => {
    let randomCode = CommonUtility.getRandomNum(10, 25);
    let student = new Student("狗蛋" + randomCode, randomCode, "201701" + randomCode, "Class" + randomCode);
    school.addStudents(student);
}).on("click", "#expel", e => {
    let selectItems = $(".student-item:checked");
    let table = $("#student-container");
    if (selectItems.length == 0) {
        console.log("there isn't any selected item");
    }
    selectItems.map((i,itemDom) => itemDom.value)
        .each((i,NO) => school.expelStudents(NO));
    selectItems.parents("tr").remove();
}).on("click", ".student-item", e => {
    if ($(".student-item").length == $(".student-item:checked")) {
        $("#selectAll").attr("checked", true);
    } else {
        $("#selectAll").removeAttr("checked");
    }

}).on("click", "#selectAll", e => {
    let $this = $(e.target);
    if ($this.attr("checked")) {
        $(".student-item").attr("checked", true);
    } else {
        $(".student-item").removeAttr("checked");
    }
});
if(module.hot){
    module.hot.accept('./index.js',()=>{
        console.log("update");
    });
}
$.ajax({
    type:'post',
    url:'/idoctorApi/WeChat/SendTemplateMsg',
    datatype:'json',
    data:JSON.stringify(ss),
    contentType:'application/json; charset=UTF-8'
});