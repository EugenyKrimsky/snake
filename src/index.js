import './index.css'
import Field from "./modules/field/Field";
import Snake from './modules/snake/Snake';

const field = new Field({
  lenX: 10,
  lenY: 10,
})

window.field = field;

field.snake = new Snake({ length: 1, head: { x: 4, y: 2 } });

field.fillField();
field.renderField();

field.snake.head.subscribe(field.renderCells.bind(field));
field.snake.startMoving();
// field.renderCells();


