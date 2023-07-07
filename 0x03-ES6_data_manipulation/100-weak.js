export const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  let count = 0;
  weakMap.set(endpoint, count);
  count += 1;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  return (weakMap);
}
