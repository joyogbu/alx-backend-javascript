export default function getListStudentIds(arg) {
  let arg2 = [];
  arg2.push(arg);
  const empty = [];
  if (typeof (arg2) != 'array') {
    return empty;
  }
  let result = arg2.map(({id}) => {
  //const result = Object.keys(arg2).map(elem => {
	  return `${arg[id]}`;
	  //return `${id}`;
  });
  return (result);
}
