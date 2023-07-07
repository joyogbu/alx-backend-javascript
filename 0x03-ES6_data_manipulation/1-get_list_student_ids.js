export default function getListStudentIds(arg1) {
  const empty = [];
  if (!Array.isArray(arg1)) {
    return empty;
  }
  return arg1.map((elem) => elem.id);
}
