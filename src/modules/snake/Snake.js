import Head from "./parts/Head";

export default class Snake {
  constructor(options) {
    this.length = options.length;
    this.head = new Head(options.head);
    this.body = this.length > 1 ? [] : null;
  }
  startMoving() {
    setInterval(() => {
      this.head.move();
    }, 1000);
  }
}