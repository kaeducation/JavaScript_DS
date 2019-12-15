const { Trie, TrieNode } = require("./index");

let isEndOfWord, children;
let _root;

describe("TrieNode and Trie", () => {
  test("TrieNode hold two properties, a boolean value for end of word and another for children", () => {
    const node = new TrieNode();
    const keys = Object.keys(node);
    const valuesTypeOf = Object.values(node).map(v => typeof v);

    expect(keys.length).toEqual(2);
    expect(valuesTypeOf.includes("boolean")).toEqual(true);
    expect(valuesTypeOf.includes("object")).toEqual(true);

    //Get name of properties on TrieNode
    for (key in node) {
      if (typeof node[key] === "boolean") {
        isEndOfWord = key;
      }
      if (typeof node[key] === "object") {
        children = key;
      }
    }
  });
  test("Trie has single property holding root, root must be Trie Node.", () => {
    const trie = new Trie();
    const keys = Object.keys(trie);
    expect(keys.length).toEqual(1);
    _root = keys[0];
    expect(trie[_root] instanceof TrieNode).toEqual(true);
  });
});

describe.skip("insert", () => {
  test("inserts nodes and marks correct node as end of word.", () => {
    const t = new Trie();
    t.insert("man");
    t.insert("mat");

    const rootNode = t[_root];
    expect(rootNode[isEndOfWord]).toEqual(false);
    //Check that root only has one child of "m"
    expect(Object.keys(rootNode[children]).length).toEqual(1);

    const mNode = rootNode[children]["m"];
    expect(Object.keys(mNode[children]).length).toEqual(1);

    const aNode = mNode[children]["a"];
    expect(aNode[isEndOfWord]).toEqual(false);
    expect(Object.keys(aNode[children]).length).toEqual(2);

    const tNode = aNode[children]["t"];
    const nNode = aNode[children]["n"];
    expect(tNode[isEndOfWord]).toEqual(true);
    expect(nNode[isEndOfWord]).toEqual(true);
  });
});

describe.skip("search", () => {
  const t = new Trie();
  t.insert("canada");

  test("returns true if word found", () => {
    expect(t.search("canada")).toEqual(true);
  });
  test("returns false if word not found", () => {
    expect(t.search("a")).toEqual(false);
    expect(t.search("canad")).toEqual(false);
  });
});

describe.skip("Prefix", () => {
  test("autocomplete(prefix) works", () => {
    const t = new Trie();
    t.insert("carer");
    t.insert("care");
    t.insert("card");
    t.insert("car");

    expect(t.autocomplete("care").length).toEqual(2);
    expect(t.autocomplete("car").length).toEqual(4);

    expect(t.autocomplete("card")).toEqual(["card"]);
    expect(t.autocomplete("meow")).toEqual([]);
  });
});
