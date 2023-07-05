interface Student = {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const user1: Student = {
  firstName: "Joy",
  lastName: "Ogbu",
  age: 30,
  location: "Nigeria"
  }
const user2: Student = {
  firstName: "Johnjoe",
  lastName: "Akam",
  age: 35,
  location: "Nigeria"
  }
  let studentsList = [];
  studentsList.push(user1);
  studentsList.push(user2);
