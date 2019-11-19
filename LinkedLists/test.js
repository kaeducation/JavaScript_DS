const { LinkedList, Node } = require("./index");

// Find out the names of properties on node that represent data and next
const f = new Node("f");
let next, value;
for (let key in f) {
  if (f[key] === "f") {
    value = key;
  } else if (f[key] === null) {
    next = key;
  }
}

describe("Node", () => {
  test("Takes in one argument. Holds two properties, one for data and one for pointing to next node", () => {
    expect(new Node().constructor.length).toEqual(1);
    const n = new Node(13);
    expect(n[value]).toEqual(13);
    expect(n[next]).toEqual(null);
    expect(Object.values(n).length).toEqual(2);
  });
});

describe.skip("unshift", () => {
  test("adds node to start of empty list by setting head and tail correctly.", () => {
    const l = new LinkedList();
    l.unshift(10);
    expect(l.head[value]).toEqual(10);
    expect(l.tail[value]).toEqual(10);
    expect(l.length).toEqual(1);
  });
  test("adds node to start of non-empty list.", () => {
    const l = new LinkedList();
    l.unshift(2);
    l.unshift(1);
    expect(l.head[value]).toEqual(1);
    expect(l.head[next][value]).toEqual(2);
    expect(l.length).toEqual(2);
  });
});

describe.skip("clear", () => {
  test("Clears LL by removing references to head and tail. Resets Length.", () => {
    const l = new LinkedList();
    l.unshift(8);
    l.unshift(3);
    l.clear();

    expect(l.length).toEqual(0);
    expect(l.head).toEqual(null);
    expect(l.tail).toEqual(null);
  });
});

describe.skip("shift", () => {
  test("Does nothing on empty list.", () => {
    const l = new LinkedList();
    l.shift(100);

    expect(l.length).toEqual(0);
    expect(l.head).toEqual(null);
    expect(l.tail).toEqual(null);
  });
  test("Removes head for LL of length 1.", () => {
    const l = new LinkedList();
    l.unshift(100);

    expect(l.shift()[value]).toEqual(100);
    expect(l.length).toEqual(0);
    expect(l.head).toEqual(null);
    expect(l.tail).toEqual(null);
  });
  test("Removes head for LL of length greater than 1.", () => {
    const l = new LinkedList();
    l.unshift(100);
    l.unshift(16);

    expect(l.shift()[value]).toEqual(16);
    expect(l.length).toEqual(1);
    expect(l.head[value]).toEqual(100);
    expect(l.tail[value]).toEqual(100);
  });
});

describe.skip("pop", () => {
  test("Does nothing on empty list.", () => {
    const l = new LinkedList();
    l.pop();

    expect(l.length).toEqual(0);
    expect(l.head).toEqual(null);
    expect(l.tail).toEqual(null);
  });
  test("Removes last node for LL of length 1.", () => {
    const l = new LinkedList();
    l.unshift(100);

    expect(l.pop()[value]).toEqual(100);
    expect(l.length).toEqual(0);
    expect(l.head).toEqual(null);
    expect(l.tail).toEqual(null);
  });
  test("Removes last node for LL of length greater than 1.", () => {
    const l = new LinkedList();
    l.unshift(100);
    l.unshift(16);
    l.unshift(12);

    expect(l.pop()[value]).toEqual(100);
    expect(l.length).toEqual(2);
    expect(l.head[next][value]).toEqual(16);
    expect(l.head[value]).toEqual(12);
    expect(l.tail[value]).toEqual(16);
  });
});

describe.skip("push", () => {
  test("adds to end of LL of length > 1.", () => {
    const l = new LinkedList();
    l.unshift(1);
    l.push(100);

    expect(l.length).toEqual(2);
    expect(l.head[value]).toEqual(1);
    expect(l.head[next][value]).toEqual(100);
    expect(l.tail[value]).toEqual(100);
  });
  test("works on empty list.", () => {
    const l = new LinkedList();
    l.push(1);

    expect(l.length).toEqual(1);
    expect(l.head[value]).toEqual(1);
    expect(l.head).toEqual(l.tail);
  });
});

describe.skip("get", () => {
  test("Returns null for invalid index.", () => {
    const l = new LinkedList();
    l.push(1);

    expect(l.get(-1)).toEqual(null);
    expect(l.get(1)).toEqual(null);
    expect(l.length).toEqual(1);
  });
  test("Returns Node from the valid index.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(100);

    expect(l.get(0)[value]).toEqual(1);
    const oneHundredNode = l.head[next];
    expect(l.get(1)).toEqual(oneHundredNode);
  });
});

describe.skip("remove", () => {
  test("Returns null for invalid index.", () => {
    const l = new LinkedList();
    l.push(1);

    expect(l.remove(-1)).toEqual(null);
    expect(l.remove(1)).toEqual(null);
    expect(l.head[value]).toEqual(1);
    expect(l.length).toEqual(1);
  });
  test("Removes Node at index 0.", () => {
    const l = new LinkedList();
    l.push(1);

    expect(l.remove(0)[value]).toEqual(1);
    expect(l.head).toEqual(null);
    expect(l.tail).toEqual(null);
    expect(l.length).toEqual(0);
  });
  test("Removes last node correctly.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(100);

    expect(l.remove(1)[value]).toEqual(100);
    expect(l.head[value]).toEqual(1);
    expect(l.head[next]).toEqual(null);
    expect(l.tail[value]).toEqual(1);
    expect(l.length).toEqual(1);
  });
  test("Removes node correctly.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(50);
    l.push(100);

    expect(l.remove(1)[value]).toEqual(50);
    expect(l.head[value]).toEqual(1);
    expect(l.head[next]).toEqual(l.tail);
    expect(l.tail[value]).toEqual(100);
    expect(l.length).toEqual(2);
  });
});

describe.skip("insert", () => {
  test("Returns null for invalid index.", () => {
    const l = new LinkedList();

    expect(l.insert(-1, 1337)).toEqual(null);
    expect(l.insert(1, 1337)).toEqual(null);
    expect(l.head).toEqual(null);
    expect(l.tail).toEqual(null);
    expect(l.length).toEqual(0);
  });
  test("Inserts if index is equal to length of LL.", () => {
    const l = new LinkedList();
    l.push(1);

    expect(l.insert(1, 1337)).toEqual(true);
    expect(l.head[value]).toEqual(1);
    expect(l.head[next]).toEqual(l.tail);
    expect(l.tail[value]).toEqual(1337);
    expect(l.length).toEqual(2);
  });
  test("Inserts if index is equal to 0.", () => {
    const l = new LinkedList();
    l.push(11);

    expect(l.insert(0, 1)).toEqual(true);
    expect(l.head[value]).toEqual(1);
    expect(l.head[next]).toEqual(l.tail);
    expect(l.tail[value]).toEqual(11);
    expect(l.length).toEqual(2);
  });
  test("Inserts correctly.", () => {
    const l = new LinkedList();
    l.push(11);
    l.push(33);

    expect(l.insert(1, 22)).toEqual(true);
    expect(l.head[value]).toEqual(11);
    expect(l.head[next][value]).toEqual(22);
    expect(l.head[next][next][value]).toEqual(33);
    expect(l.length).toEqual(3);
  });
});
