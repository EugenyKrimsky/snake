import Part from "./Part";

export default class Body {
	constructor(options) {
		this.length = options.length;

		this.parts = [];
		for (let i = 0; i < this.length; i++) {
			this.parts.push(new Part({ x: null, y: null, headCords: options.headCords }));
		}
	}

	defineCords(direction, i) {
		switch (head.direction) {
			case "up":
				break;
			case "right":
				
				break;
			case "right":
				break;
			case "right":
				break;
		}
	}

	follow(head) {
		for (let part of this.parts) {
		}
	}
}
