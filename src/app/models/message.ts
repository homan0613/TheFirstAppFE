import { runInThisContext } from "vm";

export class Message {

    private _id : number;
    private _accountid: number;
    private _accountname: string;
    private _type : string;
    private _messages : string;
    private _date : string;

	constructor(id:number = 0, accountid : number = 0, accountname: string = "",  type:string='', messages:string='', date:string='') {
        this._id =id;
        this._accountid=accountid;
         this._accountname=accountname;
        this._type=type;
        this._messages=messages;
        this._date=date;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter accountid
     * @return {number}
     */
	public get accountid(): number {
		return this._accountid;
	}

    /**
     * Getter accountname
     * @return {string}
     */
	public get accountname(): string {
		return this._accountname;
	}

    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Getter messages
     * @return {string}
     */
	public get messages(): string {
		return this._messages;
	}

    /**
     * Getter date
     * @return {string}
     */
	public get date(): string {
		return this._date;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter accountid
     * @param {number} value
     */
	public set accountid(value: number) {
		this._accountid = value;
	}

    /**
     * Setter accountname
     * @param {string} value
     */
	public set accountname(value: string) {
		this._accountname = value;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    /**
     * Setter messages
     * @param {string} value
     */
	public set messages(value: string) {
		this._messages = value;
	}

    /**
     * Setter date
     * @param {string} value
     */
	public set date(value: string) {
		this._date = value;
	}
    

}
