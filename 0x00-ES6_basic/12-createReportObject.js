// import createEmployeesObject from './11-createEmployeesObject';

// const employeesList = createEmployeesObject;
export default function createReportObject(employeesList) {
  const arr = {};
  Object.entries(employeesList).forEach(([ke, va]) => {
    arr[ke] = va;
  });
  const mainDict = {
    allEmployees: arr,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return mainDict;
}
