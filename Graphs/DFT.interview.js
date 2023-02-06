// Given a DAG return the topological ordering
class GraphNode {
  constructor(val) {
    this.val = val;
    this.edges = [];
  }

  connect(node) {
    this.edges.push(node);
  }

  getAdjacentNodes() {
    return this.edges.map(edge => edge.val);
  }

  isConnected(node) {
    return this.edges.includes(node);
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }

  topologicalSort() {
    const traversedNodes = new Set();
    const topOrdering = [];
    this.nodes.forEach(node => {
      this.depthFirstTraversal(node, traversedNodes, topOrdering);
    });
    return topOrdering.reverse();
  }

  depthFirstTraversal(node, traversedNodes, ordering) {
    if (traversedNodes.has(node)) return;
    traversedNodes.add(node);
    for (const edge of node.edges) {
      this.depthFirstTraversal(edge, traversedNodes, ordering);
    }
    ordering.push(node.val);
  }
}
// NODES
const A = new GraphNode('A');
const B = new GraphNode('B');
const C = new GraphNode('C');
const D = new GraphNode('D');
const E = new GraphNode('E');
const F = new GraphNode('F');
// NODE CONNECTIONS
A.connect(C);
A.connect(B);
B.connect(D);
D.connect(F);
E.connect(F);
E.connect(C);
// GRAPH
const graph = new Graph([A, B, C, D, E, F]);
console.log(graph.topologicalSort());