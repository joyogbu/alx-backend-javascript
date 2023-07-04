export default function getListStudentIds(arg) {
  let arg2 = arg;
  const empty = [];
  if (typeof (arg2) != 'array') {
    return empty;
  }
  const result = Object.keys(arg2).map((elem) => `${elem}`);
  return (result);
}
