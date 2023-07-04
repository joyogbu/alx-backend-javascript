export default function updateStudentGradeByCity(arg1, arg2, arg3) {
	let result = arg1.filter((e) => e.location === arg2).map((item) => {
		//container = {};
		item.grade = Object.values(arg3).filter((elem) => elem === item.id);
	
	});
	return result;
}
