export default function setFromArray(arr) {
	let set = new Set(arr);
	Array.from(set);
	return set;
}
