import Cell from "../../field/cells/Cell";

export default class Head extends Cell {
  constructor(options) {
    super(options);
    this.direction = 'right';

    window.addEventListener('keydown', this.turn.bind(this))
  }
  move() {

  }
}