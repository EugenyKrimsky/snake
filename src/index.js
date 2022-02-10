import "./index.css";
import Field from "./modules/field/Field";
import Snake from "./modules/snake/Snake";

const LEN_X = 35;
const LEN_Y = 35;
const SNAKE_LENGTH = 5;
const SNAKE_SPEED = 600;

const field = new Field({
	lenX: LEN_X,
	lenY: LEN_Y,
});

window.field = field;

field.snake = new Snake({
	length: SNAKE_LENGTH,
	head: {
		x: SNAKE_LENGTH - 1,
		y: 1,
		size: {
			lenX: field.lenX,
			lenY: field.lenY,
		},
	},
	speed: SNAKE_SPEED
});

field.fillCells();
field.createField();

field.snake.head.subscribe(field.renderCells.bind(field));
field.snake.startMoving();
