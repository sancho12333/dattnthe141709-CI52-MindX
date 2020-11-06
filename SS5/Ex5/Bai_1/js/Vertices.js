import Contact from "./Contact.js"
export default class Vertices {
  data;
  constructor(data) {
    if (data instanceof Contact) {
      this.data = data;
    }
  }
}