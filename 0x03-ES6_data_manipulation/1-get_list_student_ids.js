export default function getListStudentIds(arg) {
  let empty = [];
  if (typeof(arg) != 'array') {
    return empty;
  }
  let result = arg.map(({id}) => id)
  return (result);
}
