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

  depthFirstSearch(startNode, endNode, traversedNodes = new Set(), nodes = []) {
    traversedNodes.add(startNode);
    if (startNode.val === endNode.val) { nodes.push('FOUND IT!'); return; }
    nodes.push(startNode.val);
    for (const adjacency of startNode.edges) {
      if (!traversedNodes.has(adjacency)) {
        this.depthFirstSearch(adjacency, endNode, traversedNodes, nodes);
      }
    }
    return nodes;
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
const HKG = new GraphNode('HKG');

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI, HKG]);
DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
SAN.connect(HKG);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MCO.connect(PBI);
MIA.connect(PBI);
console.log(graph.depthFirstSearch(DFW, PBI));