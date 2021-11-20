export class Story {
    private _id : number;
    private _name: string;
    private _title : string;
    private _content : string;
    private _type : string;
    private _image: string;
    private _createDate : string;
    private _updateDate: string;
    private _images: string;
    private _audios: string;

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter content
     * @return {string}
     */
	public get content(): string {
		return this._content;
	}

    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Getter image
     * @return {string}
     */
	public get image(): string {
		return this._image;
	}

    /**
     * Getter createDate
     * @return {string}
     */
	public get createDate(): string {
		return this._createDate;
	}

    /**
     * Getter updateDate
     * @return {string}
     */
	public get updateDate(): string {
		return this._updateDate;
	}

    /**
     * Getter images
     * @return {string}
     */
	public get images(): string {
		return this._images;
	}

    /**
     * Getter audios
     * @return {string}
     */
	public get audios(): string {
		return this._audios;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter content
     * @param {string} value
     */
	public set content(value: string) {
		this._content = value;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    /**
     * Setter image
     * @param {string} value
     */
	public set image(value: string) {
		this._image = value;
	}

    /**
     * Setter createDate
     * @param {string} value
     */
	public set createDate(value: string) {
        if(value === ''){
            var curTime = new Date()
            value = curTime.toDateString();
        }
		this._createDate = value;
	}

    /**
     * Setter updateDate
     * @param {string} value
     */
	public set updateDate(value: string) {
        if(value === ''){
            var curTime = new Date()
            value = curTime.toDateString();
        }
		this._updateDate = value;
	}

    /**
     * Setter images
     * @param {string} value
     */
	public set images(value: string) {
		this._images = value;
	}

    /**
     * Setter audios
     * @param {string} value
     */
	public set audios(value: string) {
		this._audios = value;
	}

	// constructor() {
	// }

	constructor($Id: number = 0    , $Name: string  = ''  , $Title: string   = ''  , $Content: string   = ''  , $Type: string  = ''   , $Image: string   = ''  , $CreateDate: string   = ''  , $UpdateDate: string  = '', $images : string = '', $audios: string = '') {
		var curTime = new Date();

        this._id = $Id;
		this._name = $Name;
		this._title = $Title;
		this._content = $Content;
		this._type = $Type;
		this._image = $Image;
        if($CreateDate === '' || $UpdateDate === ''){
            $CreateDate = curTime.toDateString();
            $UpdateDate = curTime.toDateString();
        }
		this._createDate = $CreateDate;
		this._updateDate = $UpdateDate;
		this._images = $images;
		this._audios = $audios;
	}
}
