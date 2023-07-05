export default function createInt8TypedArray(length) {
  const buffer = new ArrayBuffer(length);

  // const view = new int8Array(buffer);
  return buffer;
}
