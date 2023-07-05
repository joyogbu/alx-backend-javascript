export default function hasValuesFromArray(set, array) {
  const boo = array.every((elem) => set.has(elem));
  return boo;
}
