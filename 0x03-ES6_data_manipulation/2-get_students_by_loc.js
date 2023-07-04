export default function getStudentsByLocation(arg1, arg2) {
  const newArray = arg1.filter((e) => e.location === arg2);
  return newArray;
}
