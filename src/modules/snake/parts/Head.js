import Cell from "../../field/cells/Cell";

export default class Head extends Cell {
  constructor(options) {
    super(options);
    this.direction = 'right';

    window.addEventListener('keydown', this.turn.bind(this));
  }
  subscribe(observer) {
    this._subscriber = observer;
  }
  _subscriber() { }
  move() {
    switch (this.direction) {
      case 'up':
        this.y++;
        this._subscriber();
        break;
      case 'right':
        this.x++;
        this._subscriber();
        break;
      case 'down':
        this.y--;
        this._subscriber();
        break;
      case 'left':
        this.x--;
        this._subscriber();
        break;
    }
    // console.log(this);
  }
  turn() {

  }
}