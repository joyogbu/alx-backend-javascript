export default function appendToEachArrayValue(array, appendString) {
  let new_array = [];
  for (let idx of array) {
    //var value = array[idx];
    new_array.push(appendString + idx);
  }

  return new_array;
}
