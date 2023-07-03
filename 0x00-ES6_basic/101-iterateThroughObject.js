export default function iterateThroughObject(reportWithIterator) {
  let result;
  for (const val of reportWithIterator) {
    result = [`${val}`].join('|');
  }
  return result;
}
