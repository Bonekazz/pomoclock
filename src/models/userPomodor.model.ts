import {v4 as uuidv4} from "uuid";
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
    public title: string;
    public blocks: TimeBlock[];

    constructor(title: string, blocks: TimeBlock[]) {
        this.id = uuidv4();
        this.title = title;
        this.blocks = blocks;
    }
}