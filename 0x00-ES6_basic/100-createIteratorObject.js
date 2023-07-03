export default function createIteratorObject(report) {
	for (let key of Object.keys(report)) {
		//if (report.hasOwnProperty(key)) {
		return [`${[key]}`];
		//return [`${value}`];
		//return [`${report[key]}`];
	}
	//}*/
/*	Object.entries(report).forEach(([key,value]) => {
	console.log(value)
	});*/
//	return result;
	/*report[Symbol.iterator] = function() {
		let objs = Object.keys(this);
		let count = 0;
		isDone = false;
		let next = () => {
			if (count>=objs.length)
			{
				isDone = true;
			}
			return{done: isDone, value: this[objs[count++]]};
		}
		return {next};
	}*/
	
}
