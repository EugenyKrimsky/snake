export default class Field {
  constructor(options) {
    this.lenX = options.lenX;
    this.lenY = options.lenY;

    this.$field = document.createElement('div');
    this.$field.className = 'field';

    this.app = document.querySelector('#app');
    this.app.insertAdjacentElement('beforeend', this.$field);
  }

}