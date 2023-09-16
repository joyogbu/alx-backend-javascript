/* eslint-disable no-param-reassign */
const fs = require('fs');

const countStudents = (path) => {
	return new Promise((resolve, reject) => {
		
  let output;
  if (fs.existsSync(path)) {
    try {
      // fs.createReadStream(path, { encoding: 'utf-8' })
      // .on('data', (data) => {
      fs.readFile(path, 'utf8', function(error, data) {
     // const data = fs.readFile(path, 'utf8')
      const lines = data.split('\n');
      const mylines = lines.filter((elem) => elem.trim() !== '');
      const header = mylines[0].split(',');
      let rows;
      const out = [];
      for (let i = 1; i <= mylines.length - 1; i += 1) {
        rows = mylines[i].split(',');
        // console.log(rows)
        out.push(rows);
      }
      // console.log(out)
      output = out.map((item) => item.reduce((obj, val, index) => {
        obj[header[index]] = val;
        return obj;
      }, {}));
      // console.log(output)
      // })
      // .on('end', () => {
      // console.log(result)
      console.log(`Number of students: ${output.length}`);
      const elements = output.reduce((elements, x) => {
        const field = (elements[x.field] || []);
        field.push(x);
        elements[x.field] = field;
        return elements;
      }, {});
      // console.log(elements)
      for (const i in elements) {
        if (elements.hasOwnProperty.call(elements, i)) {
          const fnames = elements[i].map((it) => it.firstname);
          const res = `${fnames.join(', ')}`;
          console.log(`Number of students in ${i}: ${elements[i].length}. List: ${res}`);
        // console.log(`List: ${fnames.join(', ')}`)
        }
      }resolve()
       });
    } catch (error) {
	    reject(error)
      //console.log(error);
    }
 } else {
     throw new Error('Cannot load the database');
  }
	//	resolve()
	})
};
module.exports = countStudents;
