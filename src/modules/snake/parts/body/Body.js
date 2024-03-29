import Field from "../../../field/Field";
import Part from "./Part";

export default class Body {
	constructor(options) {
		this.length = options.length;
		this.headCords = options.headCords;
		this.parts = [];
		this.counter = 0;
		for (let i = 0; i < this.length; i++) {
			this.parts.push(new Part({ cords: this.defineCords(i), headCords: options.headCords, order: i + 1 }));
		}
	}

	defineCords(i) {
		switch (this.headCords.direction) {
			case "up":
				return {
					x: this.headCords.x,
					y: this.headCords.y - i + 1,
				};
			case "right":
				return {
					x: this.headCords.x - i + 1,
					y: this.headCords.y,
				};
			case "down":
				return {
					x: this.headCords.x,
					y: this.headCords.y + i - 1,
				};
			case "left":
				return {
					x: this.headCords.x + i + 1,
					y: this.headCords.y,
				};
		}
	}

	_subscriber() {}

	subscribe(callback) {
		this._subscriber = callback;
	}

	follow(head) {
		if (this.parts[this.counter].direction !== head.direction) {
			this.parts[this.counter].direction = head.direction;
			if (this.counter + 1 === this.length) {
				this.counter = 0;
			} else {
				this.counter++;
			}
		}

		for (let part of this.parts) {
			if (head.direction === part.direction) {
				switch (part.direction) {
					case "up":
						part.y = head.y + part.order;
						part.x = head.x
						break;
					case "right":
						part.x = head.x - part.order;
						part.y = head.y
						break;
					case "down":
						part.y = head.y - part.order;
						part.x = head.x
						break;
					case "left":
						part.x = head.x + part.order;
						part.y = head.y
						break;
				}
			}
			// при повороте части тела всегда должны двигаться
			//  else {
			// 	switch (part.direction) {
			// 		case "up":
			// 			part.x = part[part.order - 1].x
			// 			break;
			// 		case "right":
			// 			part.y = part[part.order - 1].y

			// 			break;
			// 		case "down":
			// 			part.x = part[part.order - 1].x
			// 			break;
			// 		case "left":
			// 			part.x = part[part.order - 1].x

			// 			break;
			// 	}

			// }
		}
	}
}
