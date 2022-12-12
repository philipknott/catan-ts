import type { Resource } from '../global/Types';

export default class Tile {
	private _resource: Resource;
	private _value: number;

	// Axial Coordinates
	private _q: number;
	private _r: number;
	private _s: number;

	// Square Coordinates (relative)
	private _x: number;
	private _y: number;

	constructor(resource: Resource, value: number, q: number, r: number) {
		this._resource = resource;
		this._value = value;

		this._q = q;
		this._r = r;
		this._s = -q - r;

		this._x = this._q - this._r / 2 - this._s / 2;
		this._y = (Math.sqrt(3) / 2) * (this._r - this._s);
	}

	get resource(): Resource {
		return this._resource;
	}

	get value(): number {
		return this._value;
	}

	get q(): number {
		return this._q;
	}

	get r(): number {
		return this._r;
	}

	get s(): number {
		return this._s;
	}

	get x(): number {
		return this._x;
	}

	get y(): number {
		return this._y;
	}
}