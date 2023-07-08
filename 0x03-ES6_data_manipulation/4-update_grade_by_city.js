export default function updateStudentGradeByCity(arg1, arg2, arg3) {
  const result = arg1.filter((e) => e.location === arg2).map((item) => ({ ...item, grade: (arg3.find((elem) => elem.studentId === item.id) || { grade: 'N/A' }).grade }));
  return result;
}
