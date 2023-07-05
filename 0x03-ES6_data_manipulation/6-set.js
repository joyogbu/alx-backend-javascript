export default function setFromArray(arr) {
  const set = new Set(arr);
  Array.from(set);
  return set;
}
