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

  breadthFirstTraversal(start, end) {
    const queue = [start];
    const traversedNodes = new Set;
    traversedNodes.add(start);
    const result = [];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node === end) { console.log('Found It'); break; }
      result.push(node.val);
      for (const adjacency of node.edges) {
        if (!traversedNodes.has(adjacency)) {
          queue.push(adjacency);
          traversedNodes.add(adjacency);
        }
      }
    }
    return result;
  }
}

const DFW = new GraphNode('DFW');
const JFK = new GraphNode('JFK');
const LAX = new GraphNode('LAX');
const HNL = new GraphNode('HNL');
const SAN = new GraphNode('SAN');
const EWR = new GraphNode('EWR');
const BOS = new GraphNode('BOS');
const MIA = new GraphNode('MIA');
const MCO = new GraphNode('MCO');
const PBI = new GraphNode('PBI');

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI]);
DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MCO.connect(PBI);
MIA.connect(PBI);
console.log(graph.breadthFirstTraversal(DFW, MIA));