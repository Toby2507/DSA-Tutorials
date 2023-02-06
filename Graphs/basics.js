// Vertex list + Edge list

const vertices = ["A", "B", "C", "D", "E"];
const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"]
];

const findAdj = node => {
  const adj = [];
  edges.forEach(edge => {
    const nodeIdx = edge.indexOf(node);
    if (nodeIdx === 1) { adj.push(edge[0]); }
    else if (nodeIdx === 0) { adj.push(edge[1]); }
  });
  return adj;
};

console.log(findAdj("C"));

const isConnected = (node1, node2) => edges.some(edge => edge.includes(node1) && edge.includes(node2));
console.log(isConnected("A", "D"));

// Adjacency Matrix

const verticeIdxs = { A: 0, B: 1, C: 2, D: 3, E: 4 };
const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0]
];

const findAdj2 = node => {
  const adjacentNodes = [];
  const nodeIdx = verticeIdxs[node];
  adjacencyMatrix[nodeIdx].forEach((connection, i) => {
    connection && adjacentNodes.push(vertices[i]);
  });
  return adjacentNodes;
};
console.log(findAdj2("A"));

const isConnected2 = (node1, node2) => !!adjacencyMatrix[verticeIdxs[node1]][verticeIdxs[node2]];

console.log(isConnected2("A", "D"));

// Adjacency List

const adjacencyList = [
  ['B', 'D'],
  ['A', 'C'],
  ['B', 'D', 'E'],
  ['A', 'C', 'E'],
  ['C', 'D']
];

const findAdj3 = node => adjacencyList[verticeIdxs[node]];
console.log(findAdj3("C"));

const isConnected3 = (node1, node2) => {

};
console.log(isConnected3("A", "D"));