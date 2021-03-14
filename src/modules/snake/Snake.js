import Cell from "../field/cells/Cell";
import Head from "./parts/Head";

export default class Snake {
  constructor(options) {
    this.length = options.length;
    this.head = new Head(options.head);
    this.body = this.length > 1 ? [] : null;
    this.didStartMoving = false;
  }
  startMoving() {
    this.didStartMoving = true;
    setInterval(() => {
      this.head.move();
    }, 300);
  }


}