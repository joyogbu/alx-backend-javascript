export interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

export interface TeacherInterface {
  workFromHme: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
  }

export class Director implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  }
  getToWork(): string {
    return('Getting a coffee break');
  }
  workDirectorTasks(): string {
    return('Getting to director tasks');
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return `Cannot work from home`;
  }
  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }
  workTeacherTasks(): string {
    return `Getting to work`;
  }
 }

export function createEmployee(salary: number | string) {
  if ((typeof salary === 'number') &&  (salary < 500)) {
    return new Teacher();
  }
  else {
    return new Director();
  }
  }
 
export function isDirector(employee) {
}

export function executeWork(employee) {
}
