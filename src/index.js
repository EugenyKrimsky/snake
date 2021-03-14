import './index.css'
import Cell from './modules/field/cells/Cell';
import Field from "./modules/field/Field";
import Snake from './modules/snake/Snake';

const field = new Field({
  lenX: 10,
  lenY: 10,
})

window.field = field;

field.snake = new Snake({ length: 1, head: { x: 0, y: 1 } });

field.fillCells();
field.renderField();

field.snake.head.subscribe(field.renderCells.bind(field));
field.snake.startMoving();

// console.log(field.cells[1].find(cell => { return cell instanceof Cell }));

