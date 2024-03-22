/**
 * @class Service
 * 
 * @classdesc Serve and manage the user pomdors data
 */

import { UserPomodor } from "../models/userPomodor.model";


export class UserPomodorService {
    public _pomodors?: UserPomodor[];
    public onUserPomodorListChnaged: Function;

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
        // this.onPomodorListChanged(pomodors);
        // localStorage.setItem("pomodors", JSON.stringify(pomodors));
    // } 

    // bindPomodorListChanged(callback: Function) { // will receive a render function from the view by the controller
        //  this.onUserListChanged = callback;
    // }
}