const { swap, buildMaxHeap, heapSort } = require('./index');

const checkArrayIsMaxHeap = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		const leftChildIdx = i * 2 + 1;
		const rightChildIdx = i * 2 + 2;

		if (leftChildIdx < arr.length && arr[i] < arr[leftChildIdx]) {
			return false;
		}

		if (rightChildIdx < arr.length && arr[i] < arr[rightChildIdx]) {
			return false;
		}
	}

	return true;
};

test('swap() helper function works.', () => {
	const arr = [ 1, 5, 4 ];
	swap(arr, 1, 2);
	expect(arr).toEqual([ 1, 4, 5 ]);
});

test('buildMaxHeap() turns an array into a valid max Heap.', () => {
	const arr = [ 23, 1, 6, 19, 14, 18, 8, 24, 15 ];
	buildMaxHeap(arr);
	expect(checkArrayIsMaxHeap(arr)).toEqual(true);
});

test('heapSort works by sorting least to greatest.', () => {
	const arr = [ 6, 1, 5, 2, 3, 4, 7 ];
	heapSort(arr);
	expect(arr).toEqual([ 1, 2, 3, 4, 5, 6, 7 ]);
});
