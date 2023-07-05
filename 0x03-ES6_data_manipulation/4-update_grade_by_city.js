export default function updateStudentGradeByCity(arg1, arg2, arg3) {
  const result = arg1.filter((e) => e.location === arg2).map((item) => {
    // let container = {};
    // item.grade = Object.values(arg3).filter((elem) => elem === item.id);
    let arr = {};
    /* eslint-disable no-constant-condition */
    if (typeof arg3.filter((e) => e.grade !== 'undefined' || e.grade !== null)) { /* arg3.map((e) => { e.grade = 'N/A';})} */
      arr = ({ ...item, grade: arg3.find((elem) => elem.studentId === item.id).grade });
    } else {
      arr = ({ ...item, grade: 'N/A' });
    }
    return arr;
  });
  return result;
}
