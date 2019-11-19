const MaxBinaryHeap = require('./index');

const values = Object.keys(new MaxBinaryHeap())[0];

describe('swap', () => {
	test('swap(i, j) works.', () => {
		const mbh = new MaxBinaryHeap();
		mbh[values] = [ 1, 5, 4 ];
		mbh.swap(1, 2);
		expect(mbh[values]).toEqual([ 1, 4, 5 ]);
	});
});

describe.skip('insert', () => {
	test('works and bubbles up properly.', () => {
		const mbh = new MaxBinaryHeap();
		mbh.insert(10);
		mbh.insert(17);
		mbh.insert(5);
		mbh.insert(500);
		expect(mbh[values]).toEqual([ 500, 17, 5, 10 ]);
	});
});

describe.skip('remove', () => {
	test('removes and returns largest value, reheapifies.', () => {
		const mbh = new MaxBinaryHeap();
		mbh.insert(100);
		mbh.insert(36);
		mbh.insert(19);
		mbh.insert(3);
		mbh.insert(17);
		mbh.insert(25);
		mbh.insert(1);
		expect(mbh.remove()).toEqual(100);
		expect(mbh[values]).toEqual([ 36, 17, 25, 3, 1, 19 ]);
		expect(mbh.remove()).toEqual(36);
		expect(mbh[values]).toEqual([ 25, 17, 19, 3, 1 ]);
		expect(mbh.remove()).toEqual(25);
		expect(mbh[values]).toEqual([ 19, 17, 1, 3 ]);
		expect(mbh.remove()).toEqual(19);
		expect(mbh[values]).toEqual([ 17, 3, 1 ]);
		expect(mbh.remove()).toEqual(17);
		expect(mbh[values]).toEqual([ 3, 1 ]);
		mbh.remove();
		expect(mbh[values]).toEqual([ 1 ]);
	});
	test('works on tree with just one node.', () => {
		const mbh = new MaxBinaryHeap();
		mbh.insert(100);
		expect(mbh.remove()).toEqual(100);
		expect(mbh[values]).toEqual([]);
	});
});
