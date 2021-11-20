export class LCtest {
    private _id: any;
    private _type: string;
    private _value : string;

	constructor(id: any = 0, type: string = '', value:string = '') {
        this._id = id;
        this._type = type;
        this._value = value;
	}

    /**
     * Getter type
     * @return {string}
     */
     public get id(): any {
		return this._id;
	}
    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Getter value
     * @return {string}
     */
	public get value(): string {
		return this._value;
	}

    /**
     * Setter id
     * @param {string} id
     */
     public set id(id: any) {
		this._id = id;
	}
    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    /**
     * Setter value
     * @param {string} value
     */
	public set value(value: string) {
		this._value = value;
	}
}
