import './index.css'
import Field from "./modules/field/Field";
import Snake from './modules/snake/Snake';

const LEN_X = 10;
const LEN_Y = 10;


const field = new Field({
  lenX: LEN_X,
  lenY: LEN_Y,
})

window.field = field;

field.snake = new Snake({ length: 1, head: { x: 0, y: 1, size: { lenX: LEN_X, lenY: LEN_Y } } });

field.fillCells();
field.createField();

field.snake.head.subscribe(field.renderCells.bind(field));
field.snake.startMoving();



