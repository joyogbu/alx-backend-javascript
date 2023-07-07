export default function getStudentIdsSum(arg1) {
  let result = arg1.reduce(function(a, b) {
	return(a + b); }, 0);
  return result;
}
