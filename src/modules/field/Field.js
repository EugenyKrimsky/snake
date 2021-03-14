import Head from "../snake/parts/Head";
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
  fillCells() {
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
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {

        if (j === this.snake.head.x && i === this.snake.head.y) {
          this.cells[i][j] = this.snake.head;

          this.$field.innerHTML = '';
          this.renderField();

          if (this.cells[i].find(cell => cell instanceof Head)) {
            this.cells[i][j] = new Cell({ x: j, y: i })
          }
        }
      }
    }
  }
}