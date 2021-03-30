import Cell from "../field/Cell";
import Body from "./parts/body/Body";
import Head from "./parts/Head";

export default class Snake {
  constructor(options) {
    this.length = options.length;
    this.head = new Head(options.head);
    this.body = this.length > 1 ? new Body({ 
      length: this.length - 1, headCords: { 
        x: this.head.x, y: this.head.y, direction: this.head.direction
      }
     }) : null;
    this.didStartMoving = false;
  }
  startMoving() {
    this.didStartMoving = true;

    setInterval(() => {
      this.head.move();

      this.body.follow({
        x: this.head.x, y: this.head.y, direction: this.head.direction
      });
    }, 100);
  }


}