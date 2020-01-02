const UndirectedGraph = require("./index");

const adjacencyList = Object.keys(new UndirectedGraph())[0];

function constructDefaultGraph() {
  const graph = new UndirectedGraph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");

  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "F");

  //          A
  //        /   \
  //       B     C
  //       |     |
  //       D --- E
  //        \   /
  //          F

  return graph;
}

describe("Graph Setup", () => {
  test("set up property for adjacency list", () => {
    const graph = new UndirectedGraph();
    expect(typeof graph[adjacencyList]).toEqual("object");
  });
});

describe.skip("addVertex", () => {
  test("works and does not overwrite if vertex already exists", () => {
    const graph = new UndirectedGraph();
    graph.addVertex("Tokyo");
    expect(graph[adjacencyList]["Tokyo"]).toEqual([]);

    graph[adjacencyList]["Tokyo"].push("yo");
    graph.addVertex("Tokyo");
    expect(graph[adjacencyList]["Tokyo"]).toEqual(["yo"]);
  });
});

describe.skip("addEdge", () => {
  test("works", () => {
    const graph = new UndirectedGraph();
    graph.addVertex("Tokyo");
    graph.addVertex("San Francisco");
    graph.addEdge("Tokyo", "San Francisco");
    expect(graph[adjacencyList]["Tokyo"]).toEqual(["San Francisco"]);
    expect(graph[adjacencyList]["San Francisco"]).toEqual(["Tokyo"]);
  });
  test("checks for valid vertices", () => {
    const graph = new UndirectedGraph();
    graph.addVertex("Tokyo");
    graph.addVertex("San Francisco");
    graph.addEdge("Tokyo", "San Francisco");

    graph.addEdge("sdasdasdas", "San Francisco");
    graph.addEdge("Tokyo", "reytjdy");
    expect(graph[adjacencyList]["Tokyo"]).toEqual(["San Francisco"]);
  });
});

describe.skip("removeEdge", () => {
  test("works", () => {
    const graph = new UndirectedGraph();
    graph.addVertex("Tokyo");
    graph.addVertex("San Francisco");
    graph.addEdge("Tokyo", "San Francisco");
    graph.removeEdge("Tokyo", "San Francisco");
    expect(graph[adjacencyList]["Tokyo"]).toEqual([]);
    expect(graph[adjacencyList]["San Francisco"]).toEqual([]);
  });
  test("checks for valid vertices", () => {
    const graph = new UndirectedGraph();
    graph.addVertex("Tokyo");
    graph.addVertex("San Francisco");

    graph.removeEdge("Tokyooo", "San Francisco");
    graph.removeEdge("Tokyo", "San Franciscooo");
  });
});

describe.skip("removeVertex", () => {
  test("removes vertex from adjacency list and as a neighbor vertex for other vertices.", () => {
    const graph = new UndirectedGraph();
    graph.addVertex("Tokyo");
    graph.addVertex("San Francisco");
    graph.addEdge("Tokyo", "San Francisco");

    graph.removeVertex("Tokyo");
    expect(graph[adjacencyList]["San Francisco"]).toEqual([]);
    expect(graph[adjacencyList]["Tokyo"]).toBeFalsy();
  });
  test("checks for valid vertices.", () => {
    const graph = new UndirectedGraph();
    graph.removeVertex("Tokyooo");
  });
});

describe.skip("dfs", () => {
  const possibleResults = ["ABDECF", "ACEFDB"];
  test("works.", () => {
    expect(
      possibleResults.includes(
        constructDefaultGraph()
          .dfs("A")
          .join("")
      )
    ).toEqual(true);
  });
});

describe.skip("bfs", () => {
  test("works.", () => {
    expect(constructDefaultGraph().bfs("A")).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ]);
  });
});
