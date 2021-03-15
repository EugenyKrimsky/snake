import Part from "./Part";

export default class Body {
  constructor(options) {
    this.length = options.length;
    this.headCords = options.headCords;

    this.parts = [];
    for (let i = 0; i < this.length; i++) {
      this.parts.push(new Part({ x: null, y: null }))
    }
  }
  follow(cords) {
    this.headCords = cords;

  }
}