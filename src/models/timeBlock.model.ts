/**
 * @class Model
 * @classdesc modelo de bloco criado pelo usuario
 */


export interface ITime {
    hours:      number,
    minutes:    number,
    seconds:    number
}

export interface ITimeBlock {
    type: string;
    time: ITime
}

export class TimeBlock {
    public _id?:     string;
    public _type:   string;
    public _time:   ITime;

    constructor({ type, time }: ITimeBlock) {
        //this._id = uuidv4();

        this._type = type;
        this._time = time;
    }
}