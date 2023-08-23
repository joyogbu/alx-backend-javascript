const countStudents = function(path) {
const csv = require('csv-parser');
const fs = require('fs');
const result = [];
if (fs.existsSync(path)) {
try {
fs.createReadStream(path)
  .pipe(csv())
  .on('data', (data) => result.push(data))
  .on('end', () => {
	  //console.log(result)
    console.log(`Number of students: ${result.length}`)
	  //let elem ={}
	  /*const item = result.reduce((item, y) => {
		  return item[y.field] = result.filter((res) => res.field === y.field)
		  //return item
	  });*/
	  
			  /*item.reduce((x, z) => {
			  const field = (elem[z.field] || [])
			  field.push(z)
			  elem[z.field] = field*/
			  //return elem
		  //});
	 // });
	  //return item
	  //console.log(item)
	  //console.log(result)


	const elements = result.reduce((elements, x) => {
		const field = (elements[x.field] || [])
		field.push(x)
		elements[x.field] = field
		return elements
	}, {});
	  //console.log(elements)
	 for (const i in elements) {
	 const fnames=elements[i].map(it => it.firstname)
    process.stdout.write(`Number of students in ${i}: ${elements[i].length}. `)
		 console.log(`List: ${fnames.join(', ')}`)
	 }

  });
	
} catch(error) {
	console.log(error)
  }
} else {
	throw new Error('Cannot load the database')
  }
};
module.exports = countStudents;
