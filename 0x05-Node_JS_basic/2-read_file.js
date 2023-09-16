const countStudents = function(path) {
//const csv = require('csv-parser');
//const readLine = require('readLine');
const fs = require('fs');
const result = [];
let output;
if (fs.existsSync(path)) {
try {
fs.createReadStream(path, { encoding: 'utf-8' })
  //.pipe(csv())
  //.on('data', (data) => result.push(data))
  .on('data', (data) => {
	  const lines = data.split('\n');
	  const mylines = lines.filter(function(elem) {
		 return elem.trim() !== ''
	  })
	  const header = mylines[0].split(',');
	  //console.log(header)
	  let rows
	  let out = []
	  for (let i = 1; i<=mylines.length-1; i=i+1) {
		  rows = mylines[i].split(',');
		  //console.log(rows)
		  out.push(rows)
	  }
	  //console.log(out)
	  output = out.map((item) => {
		  return item.reduce((obj, val, index) => {
			  obj[header[index]] = val;
			  return obj
		  }, {});
	  })
	  //console.log(output)
  })
  .on('end', () => {
	  //console.log(result)
    console.log(`Number of students: ${output.length}`)
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


	const elements = output.reduce((elements, x) => {
		const field = (elements[x.field] || [])
		field.push(x)
		elements[x.field] = field
		return elements
	}, {});
	  //console.log(elements)
	 for (const i in elements) {
	 const fnames=elements[i].map(it => it.firstname)
    const res = `${fnames.join(', ')}`
	console.log(`Number of students in ${i}: ${elements[i].length}. List: ${res}`);
		 //console.log(`List: ${fnames.join(', ')}`)
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
