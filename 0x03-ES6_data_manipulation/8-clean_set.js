export default function cleanSet(set, start) {
  // let newSet = new Set();
  const newSet = [];
  if (start === '' || typeof start !== 'string') {
    return ('');
  }
  for (const elem of set) {
    if (typeof elem !== 'undefined' && elem.startsWith(start)) {
      const newElem = elem.replace(start, '');
      newSet.push(newElem);
    }
  }
  return (newSet).toString().replace(/,/g, '-');
}
