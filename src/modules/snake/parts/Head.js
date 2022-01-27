import Cell from "../../field/Cell";

export default class Head extends Cell {
	constructor(options) {
		super(options);
		this.$cell.className = "cell head";
		this.direction = "right";

		this._state = options.size;

		this.$field = document.querySelector(".field");
		window.addEventListener("keydown", this.turn.bind(this));
	}

	subscribe(observer) {
		this._subscriber = observer;

	}

	_subscriber() {}

	step(cord) {
		this.$field.childNodes[this.y].childNodes[this.x].className = "cell";

		if (this.direction === "right" || this.direction === "down") {
			this[cord]++;

			if (this[cord] === this._state.lenX) {
				this[cord] = 0;
			}

			if (this[cord] > this._state.lenX) this[cord] = 0;
		} else {
			this[cord]--;

			if (this[cord] < 0) this[cord] = this._state.lenX - 1;
		}
	}

	move() {
		if (this.head.direction === "up" || this.head.direction === "down") {
			this.head.step("y");
		} else {
			this.head.step("x");
		}

		if (this.length > 1) this.body.follow(this.head);
		this.head._subscriber();
	}

	turn(e) {
		if (this.direction === "up" || this.direction === "down") {
			switch (e.code) {
				case "ArrowRight":
					this.direction = "right";
					break;
				case "ArrowLeft":
					this.direction = "left";
					break;
			}
		} else if (this.direction === "right" || this.direction === "left") {
			switch (e.code) {
				case "ArrowUp":
					this.direction = "up";
					break;
				case "ArrowDown":
					this.direction = "down";
					break;
			}
		}
	}
}
