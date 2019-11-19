const DirectedGraph = require('./index');

const adjacencyList = Object.keys(new DirectedGraph())[0];

describe('addVertex and addEdge', () => {
	test('addVertex works and does not overwrite if vertex already exists', () => {
		const graph = new DirectedGraph();
		graph.addVertex('Tokyo');
		expect(graph[adjacencyList]['Tokyo']).toEqual([]);
		graph[adjacencyList]['Tokyo'].push('yo');
		graph.addVertex('Tokyo');
		expect(graph[adjacencyList]['Tokyo']).toEqual([ 'yo' ]);
	});
	test('addEdge works and checks for valid vertices', () => {
		const graph = new DirectedGraph();
		graph.addVertex('Tokyo');
		graph.addVertex('San Francisco');
		graph.addEdge('Tokyo', 'San Francisco');
		expect(graph[adjacencyList]['Tokyo']).toEqual([ 'San Francisco' ]);
		expect(graph[adjacencyList]['San Francisco']).toEqual([]);

		graph.addEdge('sdasdasdas', 'San Francisco');
		graph.addEdge('Tokyo', 'reytjdy');
		expect(graph[adjacencyList]['Tokyo']).toEqual([ 'San Francisco' ]);
	});
});

describe('topological sort', () => {
	test('works', () => {
		const graph = new DirectedGraph();
		graph.addVertex('0');
		graph.addVertex('1');
		graph.addVertex('2');
		graph.addVertex('3');
		graph.addVertex('4');
		graph.addVertex('5');

		graph.addEdge('5', '2');
		graph.addEdge('5', '0');
		graph.addEdge('4', '0');
		graph.addEdge('4', '1');
		graph.addEdge('2', '3');
		graph.addEdge('3', '1');

		const possibleResults = [
			'450231',
			'452031',
			'452301',
			'452310',
			'523401',
			'523410',
			'524031',
			'524301',
			'524310',
			'540231',
			'542031',
			'542301',
			'542310'
		];

		expect(possibleResults.includes(graph.topologicalSort().join(''))).toEqual(true);
	});
});
