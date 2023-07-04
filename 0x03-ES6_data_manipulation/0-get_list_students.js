export default function getListStudents() {
  const myArray = [];
  const myObject = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const myObject2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const myObject3 = {
    id: 2,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  myArray.push(myObject);
  myArray.push(myObject2);
  myArray.push(myObject3);
  return (myArray);
}
