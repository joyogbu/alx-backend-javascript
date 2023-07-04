import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";
//console.log(typeof(getListStudents()));
//console.log(Array.isArray(getListStudents()));
let data = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
];
//console.log(getListStudentIds(data));
//console.log(getListStudents());
console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
