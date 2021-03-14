import './index.css'
import Cell from './modules/field/cells/Cell';
import Field from "./modules/field/Field";
import Snake from './modules/snake/Snake';

const LEN_X = 50;
const LEN_Y = 50;


const field = new Field({
  lenX: LEN_X,
  lenY: LEN_Y,
})

window.field = field;

field.snake = new Snake({ length: 1, head: { x: 0, y: 1, size: { lenX: LEN_X, lenY: LEN_Y } } });

field.fillCells();
field.renderField();

field.snake.head.subscribe(field.renderCells.bind(field));
field.snake.startMoving();

// console.log(field.cells[1].find(cell => { return cell instanceof Cell }));

