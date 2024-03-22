import {v4 as uuidv4} from "uuid"
/**
 * @class Model
 * 
 * @classdesc modelo de pomodoro criado pelo usuário
 * 
 * 
 */

import { TimeBlock } from "./timeBlock.model";


export class UserPomodor {
    public id: string;
    public blocks: TimeBlock[];

    constructor(blocks: TimeBlock[]) {
        this.id = uuidv4();
        this.blocks = blocks;
    }
}