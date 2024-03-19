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


import { Pomodor } from "../models/pomodor.model";
import { TimeBlock } from "../models/timeBlock.model";

export class PomodorManager {
    public currentPomodor?: Pomodor;
    public currentBlock?: TimeBlock;

    constructor() { }
}