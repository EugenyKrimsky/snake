import Cell from "../../../field/Cell";

export default class Part extends Cell {
	constructor(options) {
		super(options);
		this.headCords = options.headCords;
	}
}
