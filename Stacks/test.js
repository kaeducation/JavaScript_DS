const Stack = require('./index');

test('push and pop exist.', () => {
	const s = new Stack();
	s.push();
	s.pop();
});
test('has FILO / LIFO behavior.', () => {
	const s = new Stack();
	s.push(1);
	s.push(2);
	s.push(3);

	expect(s.pop()).toEqual(3);
	expect(s.pop()).toEqual(2);
	expect(s.pop()).toEqual(1);
	expect(s.pop()).toBeFalsy();
});
