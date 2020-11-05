import Graph from "./Graph.js";
import Vertices from "./Vertices.js";
import Edge from "./Edge.js";

let A = new Vertices("A")
let B = new Vertices("B")
let C = new Vertices("C")
let D = new Vertices("D")
let E = new Vertices("E")


let AB = new Edge(A, B);
let AC = new Edge(A, C);
let AE = new Edge(A, E);
let BD = new Edge(B, D);

let graph = new Graph();

graph.addVertiecs(A)
graph.addVertiecs(B)
graph.addVertiecs(C)
graph.addVertiecs(D)
graph.addVertiecs(E)


graph.addEdges(AB)
graph.addEdges(AC)
graph.addEdges(AE)
graph.addEdges(BD)


graph.info()
console.log(graph.findNearesVertices("E"))