export default function createEmployeesObject(departmentName, employees) {
  // return `{ ${departmentName}: [ '${[employees.join("', '")]}' ] }`;
  // const obj = {}
  // obj[`${departmentName}`] = `[${employees}]`;
  // return obj;
  const obj = {};
  const arr = [];
  for (const x of employees) {
    arr.push(x);
  }
  obj[`${departmentName}`] = arr;
  return obj;
}
