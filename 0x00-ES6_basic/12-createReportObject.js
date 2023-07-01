import createEmployeesObject from './11-createEmployeesObject.js';

let employeesList = createEmployeesObject;
export default function createReportObject(employeesList) {
  //let employeesList = createEmployeesObject;
  /*const mainDict = {};
  mainDict[allEmployees] = {};
  mainDict[allEmployees][[`${Object.keys(employeesList)}`]] = [`${Object.values(employeesList)}`];

  mainDict[`${getNumberOfDepartments()}`] = function() {
    let count = 0;
    for (let key in [`${Object.keys(employeesList)}`]) {
      count += 1;
    }
    return count;
   }
   return mainDict;
*/
   let arr = {};
   Object.entries(employeesList).forEach(([ke, va]) => {
		arr[ke] = va;
   });
   let mainDict = {
        allEmployees: arr,
			
		//[`${Object.keys(employeesList)}`]: [`${Object.values(employeesList)}`]
        //},
        getNumberOfDepartments(employeesList) {
              let count = 0;
              for (let key of [`${Object.keys(employeesList)}`]) {
                   count += 1;
              }
            
            return Object.keys(employeesList).length;
        }
    }
    return mainDict;
}
