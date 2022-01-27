import "./index.css";
import Field from "./modules/field/Field";
import Snake from "./modules/snake/Snake";

const LEN_X = 35;
const LEN_Y = 35;

const field = new Field({
	lenX: LEN_X,
	lenY: LEN_Y,
});

window.field = field;

field.snake = new Snake({
	length: 3,
	head: {
		x: 3,
		y: 1,
		size: {
			lenX: field.lenX,
			lenY: field.lenY,
		},
	},
	speed: 800
});

field.fillCells();
field.createField();

field.snake.head.subscribe(field.renderCells.bind(field));
field.snake.body.subscribe(field.clear.bind(field));
field.snake.startMoving();
