class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) { this.adjacencyList[vertex] = []; return true; }
    return false;
  }

  removeVertex(vertex) {
    const vertexEdges = this.adjacencyList[vertex];
    if (!vertexEdges) return null;
    vertexEdges.forEach(vertexEdge => this.removeEdge(vertex, vertexEdge));
    delete this.adjacencyList[vertex];
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge !== vertex1);
      return true;
    }
    return false;
  }
}

const graph = new Graph();
console.log(graph.addVertex("A"));
console.log(graph.addVertex("B"));
console.log(graph.addVertex("C"));
console.log(graph.addVertex("D"));
console.log(graph.addEdge("A", "B"));
console.log(graph.addEdge("A", "C"));
console.log(graph.addEdge("A", "D"));
console.log(graph.addEdge("B", "D"));
console.log(graph.addEdge("C", "D"));
console.log(graph.removeVertex("D"));
// console.log(graph.removeEdge("B", "A"));
console.log(graph);