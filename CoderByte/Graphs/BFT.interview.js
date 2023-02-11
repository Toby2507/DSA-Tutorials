// Given a graph of users and their connections, find the smallest distance between the users
class GraphNode {
  constructor(val) {
    this.val = val;
    this.edges = [];
  }

  connect(node) {
    this.edges.push(node);
    node.edges.push(this);
  }

  getAdjacencies() {
    return this.edges.map(edge => edge.val);
  }

  isConnectedTo(node) {
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

  reconstructPath(paths, endNode) {
    const shortestPath = [];
    let curr = endNode;
    while (curr) {
      shortestPath.push(curr.val);
      curr = paths[curr.val];
    }
    return shortestPath.reverse();
  }

  getSmallestDistance(startNode, endNode) {
    const queue = [startNode];
    const traversedNodes = {};
    traversedNodes[startNode.val] = null;
    while (queue.length > 0) {
      const node = queue.shift();
      if (node === endNode) return this.reconstructPath(traversedNodes, endNode).join(" -> ");
      node.edges.forEach(adjacency => {
        if (!traversedNodes.hasOwnProperty(adjacency.val)) {
          traversedNodes[adjacency.val] = node;
          queue.push(adjacency);
        }
      });
    }
  }
}

// User nodes;
const Hannah = new GraphNode('Hannah');
const Mary = new GraphNode('Mary');
const Mel = new GraphNode('Mel');
const Max = new GraphNode('Max');
const Dan = new GraphNode('Dan');
const Nis = new GraphNode('Nis');
const Chris = new GraphNode('Chris');
const Nicolette = new GraphNode('Nicolette');
const Yair = new GraphNode('Yair');
const Mabel = new GraphNode('Mabel');
const Liz = new GraphNode('Liz');
// Node Connections
Hannah.connect(Mel);
Hannah.connect(Max);
Hannah.connect(Liz);
Hannah.connect(Nis);
Hannah.connect(Mary);
Mel.connect(Max);
Liz.connect(Mabel);
Liz.connect(Yair);
Nis.connect(Chris);
Nis.connect(Yair);
Nis.connect(Dan);
Mabel.connect(Yair);
Yair.connect(Chris);
Chris.connect(Nicolette);
// Graph
const graph = new Graph([Hannah, Mary, Mel, Max, Dan, Nis, Chris, Nicolette, Yair, Mabel, Liz]);
console.log(graph.getSmallestDistance(Yair, Hannah));