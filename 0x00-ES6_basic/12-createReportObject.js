import createEmployeesObject from './11-createEmployeesObject.js';

const employeesList = createEmployeesObject();
export default function createReportObject(employeesList) {
  const mainDict = {};
  mainDict.allEmployees = {};
  mainDict.allEmployees[`${Object.keys(employeesList)}`] = [`${Object.values(employeesList)}`];
  return mainDict;

  function getNumberOfDepartments(employeesList) {
    let count = 0;
    for (const key in employeesList) {
      count += 1;
    }
    return count;
  }
}
