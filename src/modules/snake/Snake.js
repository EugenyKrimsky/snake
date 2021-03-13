import Cell from "../field/cells/Cell";
import Head from "./parts/Head";

export default class Snake {
  constructor(options) {
    this.length = options.length;
    this.head = new Head(options.head);
    this.body = this.length > 1 ? [] : null;
  }
  startMoving() {
    setInterval(() => {
      this.move();
    }, 1000);
  }
  move() {
    switch (this.head.direction) {
      case 'up':
        this.head.y++;
        this.renderSnake();
        break;
      case 'right':
        this.head.x++;
        this.renderSnake();
        break;
      case 'down':
        this.head.y--;
        this.renderSnake();
        break;
      case 'left':
        this.head.x--;
        this.renderSnake();
        break;
    }
    console.log(this.head);
  }

}