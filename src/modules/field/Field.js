import Snake from "../snake/Snake";
import Cell from "./cells/Cell";

export default class Field {
  constructor(options) {
    this.lenX = options.lenX;
    this.lenY = options.lenY;

    this.cells = [];

    this.$field = document.createElement('div');
    this.$field.className = 'field';

    this.app = document.querySelector('#app');
    this.app.insertAdjacentElement('beforeend', this.$field);

    this.snake = null;
  }
  fillField() {
    for (let i = 0; i < this.lenY; i++) {
      this.cells.push([]);
      for (let j = 0; j < this.lenX; j++) {
        this.cells[i].push(new Cell({ y: i, x: j }));

      }
    }
  }
  renderField() {
    for (let i = 0; i < this.cells.length; i++) {
      this.$field.insertAdjacentHTML('beforeend', '<div class="row"></div>');
      for (let j = 0; j < this.cells[i].length; j++) {
        this.$field.childNodes[i].insertAdjacentElement('beforeend', this.cells[i][j].$cell);
      }
    }
  }
  renderCells() {
    this.cells.forEach(el => {
      el.forEach(el => {
        if (el.x === this.snake.head.x && el.y === this.snake.head.y) {
          console.log(el);
        }
      })
    })
  }
}