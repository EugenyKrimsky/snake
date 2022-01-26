export default class Cell {
	constructor(options) {
		this.x = options.x;
		this.y = options.y;

		this.$cell = document.createElement("div");
		this.$cell.className = "cell";
	}
}
