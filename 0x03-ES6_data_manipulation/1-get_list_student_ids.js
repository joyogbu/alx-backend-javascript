export default function getListStudentIds(arg1) {
  const arg2 = [];
  arg2.push(arg1);
  const empty = [];
  const val = Array.isArray(arg1);
  if (val === 'false') {
  // if (typeof arg2 !== 'array') {
    return empty;
  }
  const result = arg2.map((elem) => elem.id);
  return (result);
}
