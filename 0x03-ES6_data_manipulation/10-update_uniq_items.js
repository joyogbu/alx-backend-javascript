export default function updateUniqueItems(map) {
  /* if (map instanceof Map === 'False') {
    return `Cannot process`;
  } */
  map.forEach((value, key) => {
    /* if map instanceof Map === 'False' {
      return */
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return map;
}
