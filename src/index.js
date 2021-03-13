import './index.css'
import Field from "./modules/field/Field";

const field = new Field({
  lenX: 10,
  lenY: 10,
})

window.field = field;

field.fillField();
field.renderField();
field.spawnSnake();