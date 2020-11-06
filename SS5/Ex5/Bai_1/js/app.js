import Graph from "./Graph.js";
import Vertices from "./Vertices.js";
import Edge from "./Edge.js";

let A = new Vertices("Tran Van A", "nam", "012345678")
let B = new Vertices("haha", "nu", "0123456789")
let C = new Vertices("hihi", "nam", "012345678")
let D = new Vertices("hehe", "nu", "1234")
let E = new Vertices("hoho", "nam", "56789")


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
console.log(graph.findNearesVertices("012345678"))