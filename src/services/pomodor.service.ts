/**
 * @class Service
 * 
 * @classdesc Serve and manage the user pomdors data
 */

import { Pomodor } from "../models/pomodor.model";


export class PomodorService {
    public _pomodors?: Pomodor[];
    public onPomodorListChnaged: Function;

    /**
     * pomodors [
     *  pomodor1: {
     *      id: sssss,
     *      blocks: []
     * }
     *  pomodor2: {}
     * ]
     */

    constructor() {
        // const pomodors = JSON.parse(localStorage.getItem("pomodors")) || []  // get the data from localStorage or somewhere else;

        //this._pomodors = pomodors.map(pomodor => new Pomodor(pomodor.blocks))
    }

    // add()
    // edit()
    // delete()
    // commit(pomodors: Pomodor[]){  // saves the data in the database (localStorage or ...)
        // this.onPomodorListChanged();
        // localStorage.setItem("pomodors", JSON.stringify(pomodors));
    // } 

    // bindPomodorListChanged(callback: Function) {
        //  this.onUserListChanged = callback;
    // }
}