class HashTable {
	constructor(size) {
		this.keyMap = new Array(size);
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			total = total + key.charCodeAt(i);
		}
		return total % this.keyMap.length;
	}
}

module.exports = HashTable;
