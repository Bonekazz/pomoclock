/**
 * @class Entity
 * 
 * @classdesc Roda Blocos de tempos recebidos
 * 
 * Only one instance.
 * 
 */

import { ITime, TimeBlock } from "../models/timeBlock.model";


export interface ITimerState {
    state: string;
    time: ITime;   // copy of the block
}

export class Timer {
    public _currentBlock?: TimeBlock;
    public _timerState?: ITimerState;
    
    constructor() { }

}