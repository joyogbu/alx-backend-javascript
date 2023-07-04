export default function getListStudents() {
	myArray = [];
	myObject = {
		 id: 1,
		 firstName: 'Guillaume', 
		 location: 'San Francisco'
	}
	myObject2 = {
		id: 2,
		firstName: 'James',
		location: 'Columbia'
	}
	myObject3 = {
		id: 2,
		firstName: 'James',
		location: 'Columbia'
	}
	myArray.push(myObject);
	myArray.push(myObject2);
	myArray.push(myObject3);
	return (myArray);
