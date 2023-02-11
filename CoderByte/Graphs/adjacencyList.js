class GraphNode {
  constructor(val) {
    this.val = val;
    this.edges = [];
  }

  connect(node) {
    this.edges.push(node);
    node.edges.push(this);
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
}

const nodeA = new GraphNode("A");
const nodeB = new GraphNode("B");
const nodeC = new GraphNode("C");
const nodeD = new GraphNode("D");
const nodeE = new GraphNode("E");

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

for (let node of graph.nodes) {
  console.log(`Node ${node.val}`);
  for (let conn of node.edges) {
    console.log(`       is connected to Node ${conn.val}`);
  }
}

console.log(nodeC.getAdjacentNodes());
console.log(nodeC.isConnected(nodeE)); 