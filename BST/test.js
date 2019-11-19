const { BinarySearchTree, Node } = require('./index');

const createDefaultBST = () => {
	const bst = new BinarySearchTree();
	bst.insert(8);
	bst.insert(3);
	bst.insert(10);
	bst.insert(14);
	bst.insert(1);
	bst.insert(6);
	return bst;
};

describe('insert', () => {
	test('sets root of BST if BST has no root.', () => {
		const bst = new BinarySearchTree();
		bst.insert(10);
		expect(bst.root.value).toEqual(10);
		expect(bst.root.left).toEqual(null);
		expect(bst.root.right).toEqual(null);
	});
	test('Does not insert if value is equal to another value in BST.', () => {
		const bst = new BinarySearchTree();
		bst.insert(10);
		bst.insert(10);
		expect(bst.root.value).toEqual(10);
		expect(bst.root.left).toEqual(null);
		expect(bst.root.right).toEqual(null);
	});
	test('inserts correctly.', () => {
		const bst = createDefaultBST();

		expect(bst.root.left.value).toEqual(3);
		expect(bst.root.left.left.value).toEqual(1);
		expect(bst.root.left.right.value).toEqual(6);
		expect(bst.root.right.value).toEqual(10);
		expect(bst.root.right.right.value).toEqual(14);
	});
});

describe.skip('find', () => {
	const bst = createDefaultBST();
	test('returns node with the same data.', () => {
		const sixNode = bst.root.left.right;
		expect(bst.find(6)).toEqual(sixNode);
	});
	test('returns false if node not found.', () => {
		expect(bst.find(66)).toEqual(false);
	});
});

describe.skip('bfs', () => {
	test('works on empty tree.', () => {
		const bst = new BinarySearchTree();
		expect(bst.bfs()).toEqual([]);
	});
	test('can traverse BF.', () => {
		const bst = createDefaultBST();
		expect(bst.bfs()).toEqual([ 8, 3, 10, 1, 6, 14 ]);
	});
});

describe.skip('dfs', () => {
	const bst = createDefaultBST();
	const emptyBst = new BinarySearchTree();

	test('preorder works.', () => {
		expect(emptyBst.dfsPreOrder()).toEqual([]);
		expect(bst.dfsPreOrder()).toEqual([ 8, 3, 1, 6, 10, 14 ]);
	});
	test('inorder works.', () => {
		expect(emptyBst.dfsInOrder()).toEqual([]);
		expect(bst.dfsInOrder()).toEqual([ 1, 3, 6, 8, 10, 14 ]);
	});
	test('postorder works.', () => {
		expect(emptyBst.dfsPostOrder()).toEqual([]);
		expect(bst.dfsPostOrder()).toEqual([ 1, 6, 3, 14, 10, 8 ]);
	});
});
