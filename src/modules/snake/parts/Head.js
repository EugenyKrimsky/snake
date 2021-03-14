import Cell from "../../field/cells/Cell";

export default class Head extends Cell {
  constructor(options) {
    super(options);
    this.$cell.className = 'cell head';
    this.direction = 'right';

    this._state = options.size;

    window.addEventListener('keydown', this.turn.bind(this));
  }

  subscribe(observer) {
    this._subscriber = observer;
  }
  _subscriber() { }
  move() {
    switch (this.direction) {
      case 'up':
        this.y--;
        if (this.y < 0) this.y = this._state.lenY - 1;
        this._subscriber();
        break;
      case 'right':

        this.x++;
        if (this.x > this._state.lenX) this.x = 0;
        this._subscriber();

        break;
      case 'down':

        this.y++;
        if (this.y > this._state.lenY) this.y = 0;;
        this._subscriber();
        break;
      case 'left':

        this.x--;
        if (this.x < 0) this.x = this._state.lenX - 1;;
        this._subscriber();
        break;
    }
  }
  turn(e) {
    if (e.code === 'ArrowRight') {
      switch (this.direction) {
        case 'up':
          this.direction = 'right';
          break;
        case 'right':
          this.direction = 'down';
          break;
        case 'down':
          this.direction = 'left';
          break;
        case 'left':
          this.direction = 'up';
          break;
      }
    } else if (e.code === 'ArrowLeft') {
      switch (this.direction) {
        case 'up':
          this.direction = 'left';
          break;
        case 'right':
          this.direction = 'up';
          break;
        case 'down':
          this.direction = 'right';
          break;
        case 'left':
          this.direction = 'down';
          break;
      }
    }
  }
}