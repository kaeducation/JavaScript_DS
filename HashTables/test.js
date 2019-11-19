const HashTable = require('./index');

let ht = new HashTable(17);
ht.update('red', '#ff0000');
ht.update('orange', '#ffa500 ');
ht.update('yellow', '#ffff00');
ht.update('green', '#00ff00');
ht.update('blue', '#0000ff');
ht.update('indigo', '#4b0082');
ht.update('violet', '#800080');

describe('update', () => {
	test('sets new key value pairs and uses seperate-chaining to avoid collisions.', () => {
		expect(ht.keyMap[1]).toBeFalsy();
		expect(ht.keyMap[5]).toEqual([ [ 'yellow', '#ffff00' ], [ 'indigo', '#4b0082' ] ]);
	});
	test('only updates value for key, if key already exists.', () => {
		ht.update('blue', 'meow');
		expect(ht.keyMap[16]).toEqual([ [ 'blue', 'meow' ] ]);
		ht.update('blue', '#0000ff');
	});
});

describe.skip('get', () => {
	test('returns correct value for a key', () => {
		expect(ht.get('indigo')).toEqual('#4b0082');
	});
	test('returns falsy value if not found', () => {
		expect(ht.get('indigoo')).toBeFalsy();
	});
});

describe.skip('keys', () => {
	test('works', () => {
		expect(ht.keys()).toEqual([ 'green', 'yellow', 'indigo', 'orange', 'red', 'violet', 'blue' ]);
	});
});

describe.skip('values', () => {
	test('works', () => {
		expect(ht.values()).toEqual([ '#00ff00', '#ffff00', '#4b0082', '#ffa500 ', '#ff0000', '#800080', '#0000ff' ]);
	});
});
