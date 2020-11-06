import Vertices from "./Vertices.js"
import Edge from "./Edge.js"


export default class Graph {
  vertices;
  edges;
  constructor() {
    this.vertices = [];
    this.edges = [];
  }
  addVertiecs(vertice) {
    if (vertice instanceof Vertices) {
      this.vertices.push(vertice);
    }
  }
  addEdges(edge) {
    if (edge instanceof Edge) {
      this.edges.push(edge);
    }
  }
  info() {
    console.log("Vertices: ", this.vertices);
    console.log("Edges: ", this.edges);

  }
  findNearesVertices(verticeName) {
    let foundEdges = this.edges.filter(function (edge) {
      return (edge.a.data == verticeName) || (edge.b.data == verticeName);
    });
    let foundVertice = [];
    foundEdges.forEach(function (edge) {
      if (edge.a.data == verticeName) {
        foundVertice.push(edge.b);
      } else if (edge.b.data == verticeName) {
        foundVertice.push(edge.a);
      }
      // foundVertice.push(edge.a, edge.b);
    });
    return foundVertice;
  }
}