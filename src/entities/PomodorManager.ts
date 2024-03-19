/**
 * @class Entity
 * 
 * @classdesc
 * Only one instance. Imutable
 * 
 * Responsabilidades:
 *
 * - Controla qual Pomodoro está carregado para rodar
 * 
 * - Controla qual bloco, do Pomodoro atual, está carregado para rodar;
 */


import { UserPomodor } from "../models/userPomodor.model";
import { TimeBlock } from "../models/timeBlock.model";

export class PomodorManager {
    public currentPomodor?: UserPomodor;
    public currentBlock?: TimeBlock;

    constructor() { }
}