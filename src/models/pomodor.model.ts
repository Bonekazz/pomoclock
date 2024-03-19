/**
 * @class Model
 * 
 * @classdesc modelo de pomodoro criado pelo usuário
 * 
 * 
 */

import { TimeBlock } from "./timeBlock.model";


export class Pomodor {
    public _id?: string;
    public _blocks: TimeBlock[];

    constructor(blocks: TimeBlock[]) {
        //this._id = uuidv4();
        this._blocks = blocks;
    }
}