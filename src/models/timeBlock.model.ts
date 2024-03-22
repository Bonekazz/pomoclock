import { v4 as uuidv4 } from "uuid";

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
    public id:     string;
    public type:   string;
    public time:   ITime;

    constructor({ type, time }: ITimeBlock) {
        this.id = uuidv4();
        this.type = type;
        this.time = time;
    }
}