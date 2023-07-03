export default function createIteratorObject(report) {
  let result;
  for (const key of Object.keys(report)) {
    // return [`${[key]}`];
    // return [`${value}`];
    result = [`${report[key]}`];
  }
  return [`${result}`];
  /* report[Symbol.iterator] = () => {
  let objs = Object.keys(this);
  console.log(obj);
  let count = 0;
  let count2 = 0;
  isDone = false;
  return {
    next() {
      if (count>=objs[count2].length) {
        count2 = count2+ 1;
        count = 0;
      }
      if (count2>=objs.length) {
        //isDone = true;
        return{done: true, value:undefined};
      }
      return{done: false, value: this[count++][count2++]};
    }
  } */
}
