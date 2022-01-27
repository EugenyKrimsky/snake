import Head from "../snake/parts/Head";
import Snake from "../snake/Snake";
import Cell from "./Cell";

export default class Field {
	constructor(options) {
		this.lenX = options.lenX;
		this.lenY = options.lenY;

		this.cells = [];

		this.$field = document.createElement("div");
		this.$field.className = "field";

		this.app = document.querySelector("#app");
		this.app.insertAdjacentElement("beforeend", this.$field);

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

	createField() {
		for (let i = 0; i < this.cells.length; i++) {
			this.$field.insertAdjacentHTML("beforeend", '<div class="row"></div>');
			for (let j = 0; j < this.cells[i].length; j++) {
				this.$field.childNodes[i].insertAdjacentElement("beforeend", this.cells[i][j].$cell);
			}
		}
	}

	clear(x, y) {
		this.$field.childNodes[y].childNodes[x].className = 'cell';
	}

	renderField(snake) {
		// console.log(snake.head.x, snake.body.parts[2].x);
		this.$field.childNodes[snake.head.y].childNodes[snake.head.x].className = "head";
		
		if (snake.length === 1) return;
		for (let part of snake.body.parts) {
			this.$field.childNodes[part.y].childNodes[part.x].className = "head";
		}
	}

	renderCells() {
		this.renderField(this.snake);
	}
}
