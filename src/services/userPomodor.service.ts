/**
 * @class Service
 * 
 * @classdesc Serve and manage the user pomdors data
 */

import { TimeBlock } from "../models/timeBlock.model";
import { UserPomodor } from "../models/userPomodor.model";


export class UserPomodorService {
    public userPomodorList: UserPomodor[];
    public onUserPomodorListChanged: Function;

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
        const pomo1 = new UserPomodor([new TimeBlock({type: "focus", time: {hours: 0, minutes: 0, seconds: 5}})]);
        const pomo2 = new UserPomodor([new TimeBlock({type: "focus", time: {hours: 0, minutes: 0, seconds: 5}})]);
        const pomo3 = new UserPomodor([new TimeBlock({type: "focus", time: {hours: 0, minutes: 0, seconds: 5}})]);
        localStorage.setItem("pomodors", JSON.stringify([pomo1, pomo2, pomo3]));
        
        const data = localStorage.getItem("pomodors");
        if(data === null) throw new Error("data is empty");
        const pomodors = JSON.parse(data)// get the data from localStorage or somewhere else;
        console.log(pomodors);

        this.userPomodorList = pomodors.map((pomodor: UserPomodor): UserPomodor => pomodor as UserPomodor);
    }

    // add()
    // edit()
    // delete()
    // commit(pomodors: Pomodor[]){  // saves the data in the database (localStorage or ...)
        // this.onPomodorListChanged(pomodors);
        // localStorage.setItem("pomodors", JSON.stringify(pomodors));
    // } 

    bindUserPomodorListChanged(callback: Function) { // will receive a render function from the view by the controller
        this.onUserPomodorListChanged = callback;
    }
}