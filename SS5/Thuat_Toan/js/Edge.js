import Vertices from "./Vertices.js"

export default class Edge {
  a;
  b;
  constructor(a, b) {
    if (!(a instanceof Vertices) || !(b instanceof Vertices))
      throw new Error("a,b khong phia la dinh")
    this.a = a;
    this.b = b;
  }
}