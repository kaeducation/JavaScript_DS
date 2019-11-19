class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	swap(i, j) {
		let temp = this.values[i];
		this.values[i] = this.values[j];
		this.values[j] = temp;
	}
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}
	bubbleUp() {
		let index = this.values.length - 1;

		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this.values[index] > this.values[parentIndex]) {
				this.swap(index, parentIndex);
				index = parentIndex;
			} else {
				break;
			}
		}
	}
	remove() {
		this.swap(0, this.values.length - 1);
		const maxValue = this.values.pop();
		this.sinkDown();
		return maxValue;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			const leftChildIdx = idx * 2 + 1;
			const rightChildIdx = idx * 2 + 2;
			let leftChild, rightChild;
			let swapIdx = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) {
					swapIdx = leftChildIdx;
				}
			}

			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if ((!swapIdx && rightChild > element) || (swapIdx !== null && rightChild > leftChild)) {
					swapIdx = rightChildIdx;
				}
			}

			//If no swapping has occured, break.
			if (!swapIdx) {
				break;
			}

			this.swap(idx, swapIdx);
			idx = swapIdx;
		}
	}
}

function heapSort(arr) {}

module.exports = heapSort;
