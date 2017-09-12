var $ = require("jquery");
import CommonUtility from '../js/common/utility.js';
import Student from '../js/common/student.js';
import School from '../js/common/school.js';

import '../../src/css/student.css';
import '../../src/css/addStudent.css';

$("#container").on('click',"#cancel",e=>{
    window.history.back();
}).on('click','#save',e=>{
    window.history.back();
});

