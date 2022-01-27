import Field from "../../../field/Field";
import Part from "./Part";

export default class Body {
	constructor(options) {
		this.length = options.length;
		this.headCords = options.headCords;
		this.parts = [];
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
				}		
			case "right":
				return {
					x: this.headCords.x - i + 1,
					y: this.headCords.y
				}				
			case "down":
				return {
					x: this.headCords.x,
					y: this.headCords.y + i - 1,
				}		
			case "left":
				return {
					x: this.headCords.x + i + 1,
					y: this.headCords.y
				}		
		}
	}

	_subscriber() {};

	subscribe(callback) {
		this._subscriber = callback;
	}

	follow(head) {
		for (let part of this.parts) {
			if (part.order === this.length) this._subscriber(part.x, part.y);
			switch (head.direction) {
				case "up":
					part.y = head.y - part.order;
					break;
				case "right":
					part.x = head.x - part.order;
					break;
				case "down":
					part.y = head.y + part.order;
					break;
				case "left":
					part.x = head.x + part.order;
					break;
			}
		}
	}
}
