const Queue = require('./index');

test('enqueue and dequeue exist.', () => {
	const q = new Queue();
	q.enqueue();
	q.dequeue();
});
test('has FIFO behavior.', () => {
	const q = new Queue();
	q.enqueue(1);
	q.enqueue(2);
	q.enqueue(3);

	expect(q.dequeue()).toEqual(1);
	expect(q.dequeue()).toEqual(2);
	expect(q.dequeue()).toEqual(3);
	expect(q.dequeue()).toBeFalsy();
});
