const PriorityQueue = require('./index');

const fetchWoundDescription = (node) => {
	for (let key in node) {
		if (typeof node[key] === 'string') {
			return node[key];
		}
	}
};

const values = Object.keys(new PriorityQueue())[0];

describe('enqueue', () => {
	test('takes in val and priority, pushes Node into the Priority Queue.', () => {
		const emergencyRoom = new PriorityQueue();
		expect(emergencyRoom.enqueue.length).toEqual(2);
		emergencyRoom.enqueue('glass in foot', 3);

		const firstNode = emergencyRoom[values][0];
		const valuesOfFirstNode = Object.values(firstNode);

		expect(valuesOfFirstNode.includes('glass in foot')).toEqual(true);
		expect(valuesOfFirstNode.includes(3)).toEqual(true);
	});
	test('correctly puts higher priority Nodes at top/front of Priority Queue.', () => {
		const emergencyRoom = new PriorityQueue();
		emergencyRoom.enqueue('common cold', 5);
		emergencyRoom.enqueue('gunshot wound', 1);
		emergencyRoom.enqueue('high fever', 4);
		emergencyRoom.enqueue('broken arm', 2);
		emergencyRoom.enqueue('glass in foot', 3);

		const firstNode = emergencyRoom[values][0];
		const valuesOfFirstNode = Object.values(firstNode);

		expect(valuesOfFirstNode.includes('gunshot wound')).toEqual(true);
		expect(valuesOfFirstNode.includes(1)).toEqual(true);
	});
});

describe.skip('dequeue', () => {
	test('returns dequeued node.', () => {
		const emergencyRoom = new PriorityQueue();
		emergencyRoom.enqueue('glass in foot', 3);
		const dequeuedNodeValues = Object.values(emergencyRoom.dequeue());

		expect(dequeuedNodeValues.includes('glass in foot')).toEqual(true);
		expect(dequeuedNodeValues.includes(3)).toEqual(true);
	});
	test('correctly reorganizes Priority Queue.', () => {
		const emergencyRoom = new PriorityQueue();

		emergencyRoom.enqueue('heart attack', 9);
		emergencyRoom.enqueue('stomach cramp', 11);
		emergencyRoom.enqueue('migraine', 14);
		emergencyRoom.enqueue('fever', 18);
		emergencyRoom.enqueue('back pain', 19);
		emergencyRoom.enqueue('gunshot wound', 5);
		emergencyRoom.enqueue('coughing', 21);
		emergencyRoom.enqueue('headache', 33);
		emergencyRoom.enqueue('food poisoning', 17);
		emergencyRoom.enqueue('sore throat', 27);

		expect(Object.values(emergencyRoom.dequeue()).includes('gunshot wound')).toEqual(true);
		expect(emergencyRoom[values].map(fetchWoundDescription)).toEqual([
			'heart attack',
			'stomach cramp',
			'migraine',
			'food poisoning',
			'back pain',
			'sore throat',
			'coughing',
			'headache',
			'fever'
		]);

		const emergencyRoom2 = new PriorityQueue();
		emergencyRoom2.enqueue('gunshot wound', 5);
		emergencyRoom2.enqueue('stomach cramp', 11);
		emergencyRoom2.enqueue('heart attack', 9);
		emergencyRoom2.enqueue('migraine', 14);
		emergencyRoom2.enqueue('fever', 18);
		emergencyRoom2.enqueue('back pain', 19);
		emergencyRoom2.enqueue('headache', 33);
		emergencyRoom2.enqueue('coughing', 21);
		emergencyRoom2.enqueue('sore throat', 27);
		emergencyRoom2.enqueue('food poisoning', 17);
		emergencyRoom2.dequeue();

		expect(emergencyRoom2[values].map(fetchWoundDescription)).toEqual([
			'heart attack',
			'stomach cramp',
			'fever',
			'migraine',
			'food poisoning',
			'back pain',
			'headache',
			'coughing',
			'sore throat'
		]);
	});
});
