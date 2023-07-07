export default function cleanSet(set, start) {
  // let newSet = new Set();
  const newSet = [];
  for (const elem of set) {
    if (elem.startsWith(start)) {
      const newElem = elem.replace(start, '');
      newSet.push(newElem);
    }
  }
  // for (let item of newSet) {
  return (newSet).toString().replace(/,/g, '-');
}
