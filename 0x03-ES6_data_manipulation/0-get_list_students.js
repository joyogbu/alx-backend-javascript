export default function getListStudents() {
	let myArray = [];
	let myObject = {
		 id: 1,
		 firstName: 'Guillaume', 
		 location: 'San Francisco'
	}
	let myObject2 = {
		id: 2,
		firstName: 'James',
		location: 'Columbia'
	}
	let myObject3 = {
		id: 2,
		firstName: 'James',
		location: 'Columbia'
	}
	myArray.push(myObject);
	myArray.push(myObject2);
	myArray.push(myObject3);
	return (myArray);
}
