export default function createEmployeesObject(departmentName, employees) {
  //return `{ ${departmentName}: [ '${[employees.join(', ')]}' ] }`;
 const obj = {}
  obj[`${departmentName}`] = `[${employees}]`;
  return obj;
}
