import './index.css'
import Field from "./modules/field/Field";
import Snake from './modules/snake/Snake';

const field = new Field({
  lenX: 10,
  lenY: 10,
})

window.field = field;

field.fillField();
field.renderField();

const snake = new Snake({ length: 1, head: { x: 2, y: 2 } });
field.snake = snake;
// snake.startMoving();