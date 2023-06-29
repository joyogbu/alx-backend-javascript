import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  const obj1 = new ClassRoom(19);
  const obj2 = new ClassRoom(20);
  const obj3 = new ClassRoom(34);
  arr.push(obj1);
  arr.push(obj2);
  arr.push(obj3);
  return arr;
}
