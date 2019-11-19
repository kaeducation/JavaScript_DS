const heapSort = require('./index');

test('heapSort sorts input array in place from least to greatest.', () => {
	const arr = [ 6, 1, 5, 2, 3, 4 ];
	heapSort(arr);
	expect(arr).toEqual([ 1, 2, 3, 4, 5, 6 ]);
});
