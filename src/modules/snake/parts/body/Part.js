import Cell from "../../../field/Cell";

export default class Part extends Cell {
	constructor(options) {
		super(options.cords);
		this.order = options.order;
		this.direction = options.headCords.direction;
		this.headCords = options.headCords;
	}
}
