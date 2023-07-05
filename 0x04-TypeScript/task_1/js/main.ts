export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  //maybe: unknown;
  yearsOfExperience ?: number;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName, lastName) {
  let result = [`${firstName.charAt(O)}. ${lastName}`];
  return result;
}

export interface IStudentClass {
  firstName: string;
  lastName: string;
 }
 export class StudentClass implements IStudentClass {
   firstName: string;
   lasrName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): void {
	  return `Currently working`;
  }
  displayName(): void {
	  return ${this.firstName};
  }
}
