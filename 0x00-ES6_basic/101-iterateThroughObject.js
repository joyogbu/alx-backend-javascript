export default function iterateThroughObject(reportWithIterator) {
	for(let val of reportWithIterator) {
		return [`${val}`].join('|');
	}

 }
