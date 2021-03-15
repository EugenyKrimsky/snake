import './index.css'
import Field from "./modules/field/Field";
import Snake from './modules/snake/Snake';

const LEN_X = 35;
const LEN_Y = 35;


const field = new Field({
  lenX: LEN_X,
  lenY: LEN_Y,
})

window.field = field;

field.snake = new Snake({ length: 3, head: { x: 1, y: 1, size: { lenX: LEN_X, lenY: LEN_Y } } });

field.fillCells();
field.createField();

field.snake.head.subscribe(field.renderCells.bind(field));
field.snake.startMoving();



