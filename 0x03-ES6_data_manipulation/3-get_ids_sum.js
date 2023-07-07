export default function getStudentIdsSum(arg1) {
  const result = arg1.reduce((a, b) => (a + b.id), 0);
  return result;
}
